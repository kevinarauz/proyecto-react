import { Card, InputText, InputTextarea, Button, FloatLabel } from 'shared/lib'
import { Loading } from 'shared/ui'
import { useCreatePost } from '../model/useCreatePost'
import type { Post } from 'entities/post'

interface CreatePostFormProps {
  onSuccess?: (post: Post) => void
  onCancel?: () => void
}

function CreatePostForm({ onSuccess, onCancel }: CreatePostFormProps) {
  const { 
    formData, 
    isLoading, 
    error, 
    updateField, 
    handleSubmit,
    resetForm
  } = useCreatePost(onSuccess)

  const handleCancel = () => {
    resetForm()
    onCancel?.()
  }

  return (
    <Card title="📝 Crear Nuevo Post" className="m-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-column gap-4">
          <FloatLabel>
            <InputText
              id="title"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="w-full"
              disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
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
                onClick={handleCancel}
                className="p-button-secondary"
                disabled={isLoading}
              />
            )}
            <Button
              type="submit"
              label={isLoading ? 'Creando...' : 'Crear Post'}
              icon={isLoading ? '' : 'pi pi-plus'}
              disabled={isLoading || !formData.title.trim() || !formData.body.trim()}
              className="p-button-success"
            />
          </div>

          {isLoading && (
            <div className="flex justify-content-center">
              <Loading size="small" message="Creando post..." />
            </div>
          )}
        </div>
      </form>
    </Card>
  )
}

export default CreatePostForm