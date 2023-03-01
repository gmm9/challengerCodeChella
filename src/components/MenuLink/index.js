import { useLocation, NavLink } from 'react-router-dom'
import styles from './MenuLink.module.css';

export default function MenuLink({children, to}) {

    const localizacao = useLocation();
  return (
    <NavLink className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
    {children}
  </NavLink>
  )
}
