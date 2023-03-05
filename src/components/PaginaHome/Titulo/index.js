import styles from './Titulo.module.css';

export default function Titulo({children, size, weight, fonte}) {
  return (
    <h2 className={styles.titulo}
     style={{fontSize: `${size}`,
      fontWeight: `${weight}`,
       fontFamily:`${fonte}`}}
       >
       {children}
       </h2>
  )
}
