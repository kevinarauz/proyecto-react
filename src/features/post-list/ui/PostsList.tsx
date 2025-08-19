import { Button } from 'shared/lib'
import { Loading } from 'shared/ui'
import { usePosts } from '../model/usePosts'

interface PostsListProps {
  onCreatePost?: () => void
  onEditPost?: (postId: number) => void
  onDeletePost?: (postId: number) => void
  renderPost?: (post: any) => React.ReactNode
}

function PostsList({ 
  onCreatePost, 
  onEditPost, 
  onDeletePost,
  renderPost 
}: PostsListProps) {
  const { posts, isLoading, error, refetch } = usePosts()

  if (isLoading) {
    return (
      <div className="text-center p-6">
        <Loading size="large" message="Cargando posts..." />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-6">
        <div className="bg-red-50 border-1 border-red-200 border-round p-4 mb-4">
          <i className="pi pi-exclamation-triangle text-red-600 text-2xl mb-2"></i>
          <p className="text-red-800 font-semibold mb-2">Error al cargar posts</p>
          <p className="text-red-600 text-sm mb-3">{error}</p>
          <Button 
            label="Reintentar" 
            icon="pi pi-refresh" 
            onClick={refetch}
            className="p-button-danger p-button-sm"
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-content-between align-items-center mb-4">
        <h2 className="text-2xl font-semibold text-900 m-0">
          Posts ({posts.length})
        </h2>
        {onCreatePost && (
          <Button
            label="Crear Post"
            icon="pi pi-plus"
            onClick={onCreatePost}
            className="p-button-success"
          />
        )}
      </div>

      <div className="grid">
        {posts.map((post) => (
          <div key={post.id} className="col-12">
            {renderPost ? renderPost(post) : (
              <div className="border-1 border-200 border-round p-4 mb-3 hover:shadow-2 transition-all transition-duration-200">
                <div className="flex justify-content-between align-items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-900 mb-2 line-height-3">
                      {post.title}
                    </h3>
                    <p className="text-600 line-height-3 mb-3">
                      {post.body}
                    </p>
                    <div className="flex align-items-center gap-2">
                      <i className="pi pi-user text-400"></i>
                      <span className="text-sm text-500">Usuario #{post.userId}</span>
                      <i className="pi pi-hashtag text-400 ml-3"></i>
                      <span className="text-sm text-500">Post #{post.id}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-3">
                    {onEditPost && (
                      <Button
                        icon="pi pi-pencil"
                        tooltip="Editar"
                        onClick={() => onEditPost(post.id)}
                        className="p-button-rounded p-button-text p-button-warning"
                      />
                    )}
                    {onDeletePost && (
                      <Button
                        icon="pi pi-trash"
                        tooltip="Eliminar"
                        onClick={() => onDeletePost(post.id)}
                        className="p-button-rounded p-button-text p-button-danger"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {posts.length === 0 && !isLoading && (
        <div className="text-center p-6">
          <i className="pi pi-inbox text-4xl text-400 mb-3"></i>
          <p className="text-600 text-lg">No hay posts disponibles</p>
        </div>
      )}
    </div>
  )
}

export default PostsList