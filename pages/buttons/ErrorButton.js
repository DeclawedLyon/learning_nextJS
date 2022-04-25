import styles from './Button.module.css'

export function ErrorButton() {
  
  return (
    <button
      type='button'
      className={styles.errorButton}
    >
      ERROR
    </button>
  )
}