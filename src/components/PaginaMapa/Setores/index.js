import styles from './Setores.module.css';
import {RiCheckboxBlankFill} from 'react-icons/ri'

export default function Setores({children,cor}) {
  return (
    <li className={styles.pista}>
    <RiCheckboxBlankFill style={{color: `${cor}`, fontSize: '42px'}} />
    <p className={styles.mapaContainer__texto}>{children}</p>
    </li>
  )
}
