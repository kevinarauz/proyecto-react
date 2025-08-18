import SpinnerSVG from './spinner.svg?react'

interface SpinnerProps {
  size: number
  color: string
  className?: string
}

function Spinner({ size, color, className = '' }: SpinnerProps) {
  return (
    <SpinnerSVG
      width={size}
      height={size}
      style={{ color }}
      className={className}
    />
  )
}

export default Spinner