import { useState } from 'shared/lib'
import { Card } from 'shared/lib'
import { PostsList } from 'features/post-list'
import { CreatePostForm } from 'features/post-create'
import { EditPostForm } from 'features/post-edit'
import { PostCard } from 'widgets/PostCard'
import type { Post } from 'entities/post'

type ViewMode = 'list' | 'create' | 'edit'

function PostsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [editingPostId, setEditingPostId] = useState<number | null>(null)
  const [refreshTrigger, setRefreshTrigger] = useState(0)

  const handleCreatePost = () => {
    setViewMode('create')
  }

  const handleEditPost = (postId: number) => {
    setEditingPostId(postId)
    setViewMode('edit')
  }

  const handleDeletePost = (postId: number) => {
    // Trigger refresh para actualizar la lista
    setRefreshTrigger(prev => prev + 1)
    console.log(`Post ${postId} eliminado`)
  }

  const handleCreateSuccess = (post: Post) => {
    console.log('Post creado:', post)
    setViewMode('list')
    setRefreshTrigger(prev => prev + 1)
  }

  const handleEditSuccess = (post: Post) => {
    console.log('Post actualizado:', post)
    setViewMode('list')
    setEditingPostId(null)
    setRefreshTrigger(prev => prev + 1)
  }

  const handleCancel = () => {
    setViewMode('list')
    setEditingPostId(null)
  }

  const renderPost = (post: Post) => (
    <PostCard
      post={post}
      onEdit={handleEditPost}
      onDelete={handleDeletePost}
      className="mb-3"
    />
  )

  // Vista para crear post
  if (viewMode === 'create') {
    return (
      <div className="grid">
        <div className="col-12">
          <CreatePostForm
            onSuccess={handleCreateSuccess}
            onCancel={handleCancel}
          />
        </div>
      </div>
    )
  }

  // Vista para editar post
  if (viewMode === 'edit' && editingPostId) {
    return (
      <div className="grid">
        <div className="col-12">
          <EditPostForm
            postId={editingPostId}
            onSuccess={handleEditSuccess}
            onCancel={handleCancel}
          />
        </div>
      </div>
    )
  }

  // Vista principal - lista de posts
  return (
    <div className="grid">
      <div className="col-12">
        <Card className="m-2">
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-900 mb-2">
              📝 Gestión de Posts
            </h1>
            <p className="text-600 mb-0">
              CRUD completo con JSONPlaceholder API - Crea, lee, actualiza y elimina posts
            </p>
          </div>

          <div className="bg-blue-50 border-1 border-blue-200 border-round p-3 mb-4">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-info-circle text-blue-600"></i>
              <div>
                <p className="text-blue-900 font-semibold mb-1">Información importante:</p>
                <p className="text-blue-800 text-sm m-0">
                  Esta demo utiliza JSONPlaceholder, por lo que los cambios no persisten en el servidor real.
                  Sin embargo, todas las operaciones CRUD funcionan correctamente.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="col-12">
        <Card className="m-2">
          <PostsList
            key={refreshTrigger} // Forzar re-render cuando hay cambios
            onCreatePost={handleCreatePost}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
            renderPost={renderPost}
          />
        </Card>
      </div>
    </div>
  )
}

export default PostsPage