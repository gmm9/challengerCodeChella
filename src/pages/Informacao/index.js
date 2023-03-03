import styles from './Informacao.module.css';
import infoBanner from './info.jpg'
import Banner from 'components/Banner';
import InfoSection from 'components/InfoSection';

export default function Informacao() {
  return (
    <main>
    <Banner img={infoBanner}>
    Informações Gerais
    </Banner>
    <InfoSection />
    </main>

  )
}
