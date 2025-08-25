import { useEffect, useRef } from 'react'

interface PerformanceMetrics {
  renderTime: number
  rerenderCount: number
  memoryUsage?: number
}

interface PerformanceMonitorProps {
  componentName: string
  enabled?: boolean
  onMetrics?: (metrics: PerformanceMetrics) => void
}

/**
 * Hook simplificado para monitorear performance de componentes
 * FIXED: Evita violaciones de Rules of Hooks
 */
export function usePerformanceMonitor({
  componentName,
  enabled = import.meta.env.DEV,
  onMetrics
}: PerformanceMonitorProps) {
  const rerenderCount = useRef(0)
  const lastLogTime = useRef(0)

  // Incrementar contador y log condicional
  rerenderCount.current += 1

  // Solo hacer log si está habilitado y han pasado 3 segundos
  useEffect(() => {
    if (!enabled) return

    const now = Date.now()
    if (now - lastLogTime.current > 3000) {
      const metrics: PerformanceMetrics = {
        renderTime: 0, // Simplificado para evitar problemas
        rerenderCount: rerenderCount.current
      }

      // Añadir memoria si está disponible
      if ((performance as any).memory) {
        metrics.memoryUsage = (performance as any).memory.usedJSHeapSize
      }

      if (import.meta.env.DEV) {
        console.log(`🔍 ${componentName} - Renders: ${rerenderCount.current}`)
        if (metrics.memoryUsage) {
          console.log(`💾 Memory: ${(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB`)
        }
        
        // Alertas simplificadas
        if (rerenderCount.current > 20) {
          console.warn(`⚠️ High re-render count: ${rerenderCount.current}`)
        }
      }

      onMetrics?.(metrics)
      lastLogTime.current = now
    }
  }) // Sin dependencias específicas

  return {
    rerenderCount: rerenderCount.current,
    logMetrics: () => {
      console.log(`${componentName} - Renders: ${rerenderCount.current}`)
    }
  }
}
