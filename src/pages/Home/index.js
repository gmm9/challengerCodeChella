import styles from './Home.module.css';
import Banner from "components/Banner";
import bgVerao from './bgverao.jpg';
import ArticleHome from 'components/ArticleHome';
import BoxMostarda from 'components/BoxMostarda';
import SectionTitulos from 'components/SectionTitulos';
import lista1 from 'json/titulos.json';
import lista2 from 'json/titulosPt2.json';
import AlinharTitulos from 'components/AlinharTitulos';
import ImagemHome from 'components/ImagemHome';

export default function Home() {
    return (
        <main>
        <Banner img={bgVerao}>Boas-vindas ao #CodeChella2023!</Banner>
        <section className={styles.sectionHome}>
        <ArticleHome />
        <h2 className={styles.tituloLine}>/LINE-UP/</h2>
        <BoxMostarda dia="11/03">SÁBADO</BoxMostarda>
        <AlinharTitulos>
        {lista1.map((lista) => {
            return <SectionTitulos {...lista} key={lista.id} />
        })}
        </AlinharTitulos>
        <BoxMostarda dia="12/03">DOMINGO</BoxMostarda>
        <AlinharTitulos>
        {lista2.map((lista) => {
            return <SectionTitulos {...lista} key={lista.id} />
        })}
        </AlinharTitulos>
        <ImagemHome />
        </section>
        </main>
    )
}