import Titulo from 'components/PaginaHome/Titulo';
import styles from './SectionTitulos.module.css';

export default function SectionTitulos({titulo,size,weight,fonte}) {
  return (
    <div className={styles.titulosBox}>
    <Titulo size={size} weight={weight} fonte={fonte} >{titulo}</Titulo>
    </div>
  )
}
