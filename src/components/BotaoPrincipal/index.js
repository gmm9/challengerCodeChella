import { GiTicket } from 'react-icons/gi';
import styles from './BotaoPrincipal.module.css';

export default function BotaoPrincipal({children}) {
  return (
    <button className={styles.botaoPrincipal}>
    <p>{children}</p>
    <GiTicket />
    </button>
  )
}
