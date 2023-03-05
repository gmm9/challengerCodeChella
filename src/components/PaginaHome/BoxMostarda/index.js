import styles from './BoxMostarda.module.css';

export default function BoxMostarda({children, dia}) {
  return (
    <div className={styles.boxMostardaContainer}>
    <div className={styles.linha}></div>
    <div className={styles.boxMostarda}>{children}<span className={styles.spanTitulo}>{dia}</span></div>
    <div className={styles.linha}></div>
    </div>
  )
}
