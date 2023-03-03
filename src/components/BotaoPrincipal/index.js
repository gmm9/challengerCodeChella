import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({children, icone}) {
  return (
    <button className={styles.botaoPrincipal}>
    <p>{children}</p>
    {icone}
    </button>
  )
}
