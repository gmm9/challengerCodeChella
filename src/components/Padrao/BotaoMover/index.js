import { NavLink } from 'react-router-dom'
import styles from './BotaoMover.module.css';

export default function BotaoMover({children, to}) {

  return (
    <NavLink to={to} className={styles.container}>
    {children}
  </NavLink>
  )
}
