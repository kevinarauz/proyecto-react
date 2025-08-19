import { Card, Button } from 'shared/lib'
import { DeletePostButton } from 'features/post-delete'
import type { Post } from 'entities/post'

interface PostCardProps {
  post: Post
  onEdit?: (postId: number) => void
  onDelete?: (postId: number) => void
  showActions?: boolean
  className?: string
}

function PostCard({ 
  post, 
  onEdit, 
  onDelete, 
  showActions = true,
  className = ''
}: PostCardProps) {
  const truncateText = (text: string, maxLength: number = 150) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  }

  return (
    <Card className={`hover:shadow-3 transition-all transition-duration-300 ${className}`}>
      <div className="flex flex-column h-full">
        {/* Header con ID y Usuario */}
        <div className="flex justify-content-between align-items-center mb-3">
          <div className="flex align-items-center gap-2">
            <div className="bg-blue-100 border-round px-2 py-1">
              <span className="text-xs font-semibold text-blue-800">#{post.id}</span>
            </div>
            <div className="flex align-items-center gap-1 text-500">
              <i className="pi pi-user text-xs"></i>
              <span className="text-xs">Usuario {post.userId}</span>
            </div>
          </div>
          
          {showActions && (onEdit || onDelete) && (
            <div className="flex gap-1">
              {onEdit && (
                <Button
                  icon="pi pi-pencil"
                  tooltip="Editar post"
                  onClick={() => onEdit(post.id)}
                  className="p-button-rounded p-button-text p-button-warning p-button-sm"
                />
              )}
              {onDelete && (
                <DeletePostButton
                  postId={post.id}
                  postTitle={post.title}
                  onSuccess={onDelete}
                  className="p-button-sm"
                />
              )}
            </div>
          )}
        </div>

        {/* Título */}
        <h3 className="text-xl font-semibold text-900 line-height-3 mb-3 flex-grow-1">
          {post.title}
        </h3>

        {/* Contenido */}
        <p className="text-600 line-height-3 mb-4 flex-grow-1">
          {truncateText(post.body)}
        </p>

        {/* Footer */}
        <div className="flex align-items-center justify-content-between pt-3 border-top-1 border-200">
          <div className="flex align-items-center gap-2 text-400">
            <i className="pi pi-calendar text-xs"></i>
            <span className="text-xs">JSONPlaceholder</span>
          </div>
          
          <div className="flex align-items-center gap-2">
            {post.body.length > 150 && (
              <div className="bg-orange-100 border-round px-2 py-1">
                <span className="text-xs font-semibold text-orange-800">
                  +{post.body.length - 150} chars
                </span>
              </div>
            )}
            <div className="bg-green-100 border-round px-2 py-1">
              <span className="text-xs font-semibold text-green-800">
                {post.body.split(' ').length} palabras
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PostCard