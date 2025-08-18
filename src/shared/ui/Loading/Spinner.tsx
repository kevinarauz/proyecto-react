import styles from './Loading.module.css'

interface SpinnerProps {
  size: number
  color: string
  className?: string
}

function Spinner({ size, color, className = '' }: SpinnerProps) {
  return (
    <svg
      className={`${styles.spinner} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color }}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="31.416"
        strokeDashoffset="23.562"
        strokeLinecap="round"
        fill="none"
        className={styles.spinnerPath}
      />
    </svg>
  )
}

export default Spinner