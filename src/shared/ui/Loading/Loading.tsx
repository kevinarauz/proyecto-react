import Spinner from './Spinner'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
  fullScreen?: boolean
  className?: string
  color?: string
}

function Loading({ 
  size = 'medium', 
  message = 'Cargando...', 
  fullScreen = false,
  className = '',
  color = '#007bff'
}: LoadingProps) {
  const getSize = () => {
    switch (size) {
      case 'small': return 24
      case 'large': return 64
      default: return 40
    }
  }

  const getTextSize = () => {
    switch (size) {
      case 'small': return 'text-sm'
      case 'large': return 'text-xl'
      default: return 'text-base'
    }
  }

  const containerClass = fullScreen 
    ? 'fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 flex align-items-center justify-content-center z-5'
    : `flex flex-column align-items-center justify-content-center gap-3 ${className}`

  return (
    <div className={containerClass}>
      <div className="flex align-items-center justify-content-center">
        <Spinner size={getSize()} color={color} />
      </div>
      
      {message && (
        <span className={`text-600 ${getTextSize()}`}>
          {message}
        </span>
      )}
    </div>
  )
}

export default Loading