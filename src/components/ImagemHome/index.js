import styles from './ImagemHome.module.css';
import fotoPequena from './festaHome.png';
import fotoGrande from './fotoGrande.jpg';
import React, { useEffect, useState } from 'react'



export default function ImagemHome() {
    const [tamanho, setTamanho] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setTamanho(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <img className={styles.img} src={tamanho > 768 ? fotoGrande : fotoPequena} alt="povo feliz no festival"/>
  )
}
