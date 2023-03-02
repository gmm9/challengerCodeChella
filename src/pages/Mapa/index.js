import styles from './Mapa.module.css';
import Banner from 'components/Banner'
import MapaSetores from 'components/MapaSetores';
import bgmapa from './bgmapa.jpg';

export default function Mapa() {
  return (
    <main>
      <Banner img={bgmapa}>
        Mapa de Setores
      </Banner>
      <MapaSetores />
    </main>
  )
}
