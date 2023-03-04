import Banner from 'components/Banner'
import Ticket from 'components/Ticket'
import banner from './bannerPessoas.jpg'
import styles from './Sucesso.module.css';

export default function Sucesso() {
  return (
    <main className={styles.container}>

    <Banner img={banner}>
        Seu ingresso está aqui!
    </Banner>
    <h2>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
    <div className={styles.boxTicket}>
    <Ticket />
    </div>
    </main>
  )
}
