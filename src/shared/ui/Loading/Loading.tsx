interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
  fullScreen?: boolean
  className?: string
}

function Loading({ 
  size = 'medium', 
  message = 'Cargando...', 
  fullScreen = false,
  className = ''
}: LoadingProps) {
  const getSizeClass = () => {
    switch (size) {
      case 'small': return 'w-2rem h-2rem'
      case 'large': return 'w-6rem h-6rem'
      default: return 'w-4rem h-4rem'
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
        <i className={`pi pi-spin pi-spinner text-primary ${getSizeClass()}`} 
           style={{ fontSize: size === 'small' ? '1rem' : size === 'large' ? '3rem' : '2rem' }}></i>
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