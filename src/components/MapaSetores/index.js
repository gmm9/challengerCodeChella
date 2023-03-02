import styles from './MapaSetores.module.css';
import mapaSetor from './mapaSetores.jpg';
import Setores from 'components/Setores';

export default function MapaSetores() {
  return (
    <section className={styles.mapaContainer}>
    <div className={styles.imgContainer}>
        <img src={mapaSetor} className={styles.img} alt="foto do estadio, mostrando as vagas" />
    </div>
    <div className={styles.boxSetores}>
        <h3 className={styles.boxTitulo}>Legenda:</h3>
        <ul>
        <Setores cor="#0E7DF1">Pista Premium</Setores>
        <Setores cor="#FE016E">Pista Comum</Setores>
        <Setores cor="#01A89E">Pista Térreo</Setores>
        <Setores cor="#3F51B5">Pista Superiores</Setores>
        <Setores cor="#0E7DF1">Rampas</Setores>
        </ul>
    </div>
    </section>
  )
}
