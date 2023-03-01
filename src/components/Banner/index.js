import styles from './Banner.module.css';
import React from 'react'

export default function Banner({children, img}) {
  return (
    <section className={styles.container__banner}>
    <div className={styles.banner} style={{backgroundImage: `url("${img}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height:'inherit',
    width:'100%'}}>
    </div>
        <div className={styles.banner__titulos}>
        <h2>{children}</h2>
        </div>
    </section>
  )
}
