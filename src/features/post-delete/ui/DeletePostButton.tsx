import React from 'react'
import { useState } from 'shared/lib'
import { Button } from 'shared/lib'
import { useDeletePost } from '../model/useDeletePost'

interface DeletePostButtonProps {
  postId: number
  postTitle?: string
  onSuccess?: (postId: number) => void
  className?: string
  tooltip?: string
  buttonProps?: Record<string, unknown>
}

// Función de comparación para DeletePostButton
const areDeletePostButtonPropsEqual = (
  prevProps: DeletePostButtonProps,
  nextProps: DeletePostButtonProps
): boolean => {
  // Comparar todas las props relevantes
  return (
    prevProps.postId === nextProps.postId &&
    prevProps.postTitle === nextProps.postTitle &&
    prevProps.onSuccess === nextProps.onSuccess &&
    prevProps.className === nextProps.className &&
    prevProps.tooltip === nextProps.tooltip &&
    // Comparación superficial para buttonProps
    JSON.stringify(prevProps.buttonProps) === JSON.stringify(nextProps.buttonProps)
  )
}

function DeletePostButton({ 
  postId, 
  postTitle,
  onSuccess, 
  className = '',
  tooltip = 'Eliminar',
  buttonProps = {}
}: DeletePostButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false)
  const { isDeleting, error, deletePost, clearError } = useDeletePost(onSuccess)

  const handleDelete = async () => {
    const success = await deletePost(postId)
    if (success) {
      setShowConfirm(false)
    }
  }

  const handleCancel = () => {
    setShowConfirm(false)
    clearError()
  }

  if (showConfirm) {
    return (
      <div className="flex flex-column gap-2">
        <div className="bg-yellow-50 border-1 border-yellow-200 border-round p-3">
          <div className="flex align-items-center gap-2 mb-2">
            <i className="pi pi-exclamation-triangle text-yellow-600"></i>
            <span className="text-sm font-semibold text-yellow-900">
              ¿Confirmar eliminación?
            </span>
          </div>
          {postTitle && (
            <p className="text-sm text-yellow-800 m-0 mb-2">
              "{postTitle.substring(0, 50)}{postTitle.length > 50 ? '...' : ''}"
            </p>
          )}
          <p className="text-xs text-yellow-700 m-0">
            Esta acción no se puede deshacer
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border-1 border-red-200 border-round p-2">
            <span className="text-xs text-red-800">{error}</span>
          </div>
        )}

        <div className="flex gap-2 justify-content-end">
          <Button
            label="Cancelar"
            icon="pi pi-times"
            onClick={handleCancel}
            className="p-button-sm p-button-secondary"
            disabled={isDeleting}
          />
          <Button
            label={isDeleting ? 'Eliminando...' : 'Eliminar'}
            icon={isDeleting ? 'pi pi-spin pi-spinner' : 'pi pi-trash'}
            onClick={handleDelete}
            className="p-button-sm p-button-danger"
            disabled={isDeleting}
          />
        </div>
      </div>
    )
  }

  return (
    <Button
      icon="pi pi-trash"
      tooltip={tooltip}
      onClick={() => setShowConfirm(true)}
      className={`p-button-rounded p-button-text p-button-danger ${className}`}
      disabled={isDeleting}
      {...buttonProps}
    />
  )
}

// Memoizar DeletePostButton para optimizar re-renders
// Beneficios: Evita re-renders innecesarios del botón y su estado de confirmación
// especialmente útil cuando se renderiza en listas largas
export default React.memo(DeletePostButton, areDeletePostButtonPropsEqual)