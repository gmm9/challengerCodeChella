import BotaoPrincipal from 'components/BotaoPrincipal';
import { useEffect, useState } from 'react';
import styles from './ArticleHome.module.css';
import pessoas from './multidao.png'; 
import festa from './pessoalFesta.png';

export default function ArticleHome() {
  const [tamanho, setTamanho] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setTamanho(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <article className={styles.articleHome}>
        <img className={styles.articleHome__img} src={tamanho >= 768 ? festa : pessoas} alt="Pessoas felizes esperando o show" />
        
        <div className={styles.articleHome__box}>
        <div className={styles.articleHome__titulo}>
        <h2><span className={styles.spanTitulo}>11 e 12 de Março</span></h2>
        <h2>Aluródromo de São Paulo</h2>
        </div>
        <p className={styles.articleHome__texto}>Hora de programar nossa memória com novas 
        lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia!
         Somos um festival diverso, com vários artistas e referências. Divirta-se!</p>
         <BotaoPrincipal>Comprar ingresso!</BotaoPrincipal>
         </div>
    </article>
  )
}
