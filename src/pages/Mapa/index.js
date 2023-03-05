import styles from './Mapa.module.css';
import Banner from 'components/Padrao/Banner'
import MapaSetores from 'components/PaginaMapa/MapaSetores';
import bgmapa from './bgmapa.jpg';
import SetoresDetalhes from 'components/PaginaMapa/SetoresDetalhes';

export default function Mapa() {
  return (
    <main>
      <Banner img={bgmapa}>
        Mapa de Setores
      </Banner>
      <MapaSetores />
      <SetoresDetalhes />
      
    </main>
  )
}
