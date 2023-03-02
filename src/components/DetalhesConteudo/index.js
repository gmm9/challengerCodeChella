import styles from './DetalhesConteudo.module.css';

import React from 'react'

export default function DetalhesConteudo({children,titulo,img}) {
  return (
    <div className={styles.container}>
    <div className={styles.boxImg}>
    <img src={img} className={styles.img} alt="foto do evento" />
    </div>
    <h2 className={styles.titulo}>{titulo}</h2>
    <p className={styles.texto}>{children}</p>
    </div>
  )
}
