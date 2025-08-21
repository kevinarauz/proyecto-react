import React from 'react'
import { useNavigate } from 'shared/lib'
import styles from './NavigationCard.module.css'

interface NavigationCardProps {
  id: string
  title: string
  description: string
  icon: string
  path: string
  stats: string
  gradient: string
  className?: string
}

function NavigationCard({ 
  id, 
  title, 
  description, 
  icon, 
  path, 
  stats, 
  gradient,
  className = ''
}: NavigationCardProps) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(path)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      navigate(path)
    }
  }

  return (
    <div
      className={`${styles['nav-card']} ${className} border-round-lg p-0 cursor-pointer h-full overflow-hidden`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Navegar a ${title}`}
      data-testid={`navigation-card-${id}`}
      style={{
        background: '#ffffff',
        border: '1px solid #e9ecef',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)'
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #007ad9'
        e.currentTarget.style.outlineOffset = '2px'
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none'
      }}
    >
      {/* Header con gradiente */}
      <div 
        className="p-4 text-white relative"
        style={{ 
          background: gradient,
          minHeight: '120px'
        }}
      >
        <div className="flex justify-content-between align-items-start mb-3">
          <div 
            className={`${styles['nav-card-icon']} border-circle w-3rem h-3rem flex align-items-center justify-content-center bg-white-alpha-20`}
            style={{
              transition: 'transform 0.3s ease'
            }}
          >
            <i className={`${icon} text-2xl text-white`}></i>
          </div>
          <i className={`pi pi-arrow-right text-white-alpha-70 ${styles['arrow-indicator']}`}></i>
        </div>
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-white-alpha-90 text-sm mb-0 line-height-3">
          {description}
        </p>
      </div>

      {/* Footer con estadística */}
      <div className="p-4">
        <div className="flex align-items-center justify-content-between">
          <span className={`text-600 text-sm ${styles['stats-counter']}`}>
            <i className="pi pi-chart-line mr-1"></i>
            {stats}
          </span>
          <span className="text-primary font-semibold text-sm">
            Explorar <i className="pi pi-chevron-right text-xs ml-1"></i>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavigationCard