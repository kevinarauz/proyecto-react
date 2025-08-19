import { Card, InputText, InputTextarea, Button, FloatLabel } from 'shared/lib'
import { Loading } from 'shared/ui'
import { useEditPost } from '../model/useEditPost'
import type { Post } from 'entities/post'

interface EditPostFormProps {
  postId: number
  onSuccess?: (post: Post) => void
  onCancel?: () => void
}

function EditPostForm({ postId, onSuccess, onCancel }: EditPostFormProps) {
  const { 
    formData, 
    isLoading,
    isUpdating, 
    error, 
    updateField, 
    handleSubmit 
  } = useEditPost(postId, onSuccess)

  if (isLoading) {
    return (
      <Card title="✏️ Editar Post" className="m-2">
        <div className="text-center p-6">
          <Loading size="large" message="Cargando post..." />
        </div>
      </Card>
    )
  }

  if (error && !formData) {
    return (
      <Card title="✏️ Editar Post" className="m-2">
        <div className="text-center p-6">
          <div className="bg-red-50 border-1 border-red-200 border-round p-4">
            <i className="pi pi-exclamation-triangle text-red-600 text-2xl mb-2"></i>
            <p className="text-red-800 font-semibold mb-2">Error al cargar el post</p>
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        </div>
      </Card>
    )
  }

  if (!formData) return null

  return (
    <Card title={`✏️ Editar Post #${postId}`} className="m-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column gap-4">
          <FloatLabel>
            <InputText
              id="title"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="w-full"
              disabled={isUpdating}
              required
            />
            <label htmlFor="title">Título del post</label>
          </FloatLabel>

          <FloatLabel>
            <InputTextarea
              id="body"
              value={formData.body}
              onChange={(e) => updateField('body', e.target.value)}
              rows={6}
              className="w-full"
              disabled={isUpdating}
              required
            />
            <label htmlFor="body">Contenido del post</label>
          </FloatLabel>

          <FloatLabel>
            <InputText
              id="userId"
              type="number"
              value={formData.userId.toString()}
              onChange={(e) => updateField('userId', parseInt(e.target.value) || 1)}
              className="w-full"
              disabled={isUpdating}
              min="1"
              max="10"
            />
            <label htmlFor="userId">ID del Usuario (1-10)</label>
          </FloatLabel>

          {error && (
            <div className="bg-red-50 border-1 border-red-200 border-round p-3">
              <div className="flex align-items-center gap-2">
                <i className="pi pi-exclamation-triangle text-red-600"></i>
                <span className="text-sm text-red-800">{error}</span>
              </div>
            </div>
          )}

          <div className="flex gap-2 justify-content-end">
            {onCancel && (
              <Button
                type="button"
                label="Cancelar"
                icon="pi pi-times"
                onClick={onCancel}
                className="p-button-secondary"
                disabled={isUpdating}
              />
            )}
            <Button
              type="submit"
              label={isUpdating ? 'Actualizando...' : 'Actualizar Post'}
              icon={isUpdating ? '' : 'pi pi-check'}
              disabled={isUpdating || !formData.title.trim() || !formData.body.trim()}
              className="p-button-warning"
            />
          </div>

          {isUpdating && (
            <div className="flex justify-content-center">
              <Loading size="small" message="Actualizando post..." />
            </div>
          )}
        </div>
      </form>
    </Card>
  )
}

export default EditPostForm