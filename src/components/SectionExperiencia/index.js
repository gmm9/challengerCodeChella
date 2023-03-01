import styles from './SectionExperiencia.module.css';
import "./estiloExclusivo.css"

export default function SectionExperiencia({children,titulo,img,classExclusiva = ""}) {

  return (
    <section className={`${styles.container} ${classExclusiva}`}>
        <div className={`${styles.container__img} ${classExclusiva}`}>
            <img src={img} className={styles.img} alt="foto de pessoas no festival" />
        </div>
        <div className={styles.containerBox__textos}>
            <h2 className={styles.container__titulo}>{titulo}</h2>
            <p className={styles.container__texto}>
                {children}
            </p>
        </div>
    </section>
  )
}
