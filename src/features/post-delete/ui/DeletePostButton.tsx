import React from 'react'
import { Button, confirmDialog } from 'shared/lib'
import { useDeletePost } from '../model/useDeletePost'

interface DeletePostButtonProps {
  postId: number
  postTitle?: string
  onSuccess?: (postId: number) => void
  className?: string
  tooltip?: string
  size?: 'small' | 'large' | undefined
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
    prevProps.size === nextProps.size &&
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
  size,
  buttonProps = {}
}: DeletePostButtonProps) {
  const { isDeleting, deletePost } = useDeletePost(onSuccess)

  const handleConfirmDelete = () => {
    confirmDialog({
      message: `¿Estás seguro de que deseas eliminar este post?${postTitle ? `\n\n"${postTitle.length > 60 ? postTitle.substring(0, 60) + '...' : postTitle}"` : ''}`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      rejectClassName: 'p-button-text p-button-secondary',
      acceptLabel: isDeleting ? 'Eliminando...' : 'Eliminar',
      rejectLabel: 'Cancelar',
      accept: () => deletePost(postId),
      reject: () => {
        // No hacer nada al cancelar
      },
      style: { width: '450px' },
      contentStyle: { 
        padding: '2rem',
        lineHeight: '1.6'
      },
      headerStyle: {
        padding: '1.5rem 2rem 1rem 2rem',
        fontSize: '1.2rem'
      }
    })
  }

  return (
    <Button
      icon="pi pi-trash"
      tooltip={tooltip}
      tooltipOptions={{ position: 'top' }}
      onClick={handleConfirmDelete}
      className={className}
      disabled={isDeleting}
      size={size}
      {...buttonProps}
    />
  )
}

// Memoizar DeletePostButton para optimizar re-renders
// Beneficios: Evita re-renders innecesarios del botón y su estado de confirmación
// especialmente útil cuando se renderiza en listas largas
export default React.memo(DeletePostButton, areDeletePostButtonPropsEqual)