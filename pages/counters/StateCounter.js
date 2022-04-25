import react, {useState} from "react"
import styles from './StateCounter.module.css'

export function StateCounter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.counterContainer}>
      <span className={styles.counter}>{count}</span>
      <button type="button" className={styles.subtractButton} onClick={() => setCount(prevCount => prevCount - 1)}>Subtract</button>
      <button type="button" className={styles.addButton} onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}