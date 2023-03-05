import Banner from 'components/Padrao/Banner';
import MoldeFormulario from 'components/PaginaIngresso/MoldeFormulario';
import ingressoBanner from './ingressoBanner.jpg';

export default function Ingresso() {
  return (
    <main>
        <Banner img={ingressoBanner}>
            Garanta seu ingresso
        </Banner>
        <MoldeFormulario />
    </main>
  )
}
