import MenuLink from 'components/MenuLink';
import styles from './MenuMobile.module.css';

export default function MenuMobile() {
  return (
    <div>
        <ul className={styles.menuList}>
            <li><MenuLink to="/experiencia">A experiência</MenuLink></li>
            <li><div className={styles.linha}></div></li>
            <li>Mapa de Setores</li>
            <li><div className={styles.linha}></div></li>
            <li>Informação</li>
            <li><div className={styles.linha}></div></li>
            <li>Ingresso</li>
        </ul>
    </div>
  )
}
