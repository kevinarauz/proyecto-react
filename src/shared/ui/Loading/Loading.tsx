import React from 'react'
import Spinner from './Spinner'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
  fullScreen?: boolean
  className?: string
  color?: string
}

// Funciones puras para cálculos - no necesitan memoización externa
const getSizeValue = (size: 'small' | 'medium' | 'large'): number => {
  switch (size) {
    case 'small': return 24
    case 'large': return 64
    default: return 40
  }
}

const getTextSizeClass = (size: 'small' | 'medium' | 'large'): string => {
  switch (size) {
    case 'small': return 'text-sm'
    case 'large': return 'text-xl'
    default: return 'text-base'
  }
}

// Función de comparación para Loading
const areLoadingPropsEqual = (
  prevProps: LoadingProps,
  nextProps: LoadingProps
): boolean => {
  return (
    prevProps.size === nextProps.size &&
    prevProps.message === nextProps.message &&
    prevProps.fullScreen === nextProps.fullScreen &&
    prevProps.className === nextProps.className &&
    prevProps.color === nextProps.color
  )
}

function Loading({ 
  size = 'medium', 
  message = 'Cargando...', 
  fullScreen = false,
  className = '',
  color = '#007bff'
}: LoadingProps) {
  // Usar las funciones memoizadas
  const spinnerSize = getSizeValue(size)
  const textSizeClass = getTextSizeClass(size)

  const containerClass = fullScreen 
    ? 'fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex align-items-center justify-content-center z-5'
    : `flex flex-column align-items-center justify-content-center gap-3 ${className}`

  return (
    <div className={containerClass}>
      <div className="flex align-items-center justify-content-center">
        <Spinner size={spinnerSize} color={color} />
      </div>
      
      {message && (
        <span className={`text-600 ${textSizeClass}`}>
          {message}
        </span>
      )}
    </div>
  )
}

// Memoizar Loading para optimizar re-renders frecuentes
// Beneficios: Este componente se usa en múltiples lugares del app
// y puede re-renderizar innecesariamente cuando cambian props del componente padre
export default React.memo(Loading, areLoadingPropsEqual)