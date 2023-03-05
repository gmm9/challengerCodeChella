import styles from './Ticket.module.css';
import logo from './logo.png';
import elipse from './elipse.png';
import qrcode from './qrcode.png';
import { useContext } from 'react';
import { FormularioContext } from 'contextos/Formulario';


export default function Ticket() {
  const { formulario } = useContext(FormularioContext);

  return (
    <section className={styles.container}>
        <div className={styles.box__logos}>
            <img src={logo} alt="logo do evento" />
            <img src={elipse} alt="logo </>" />
        </div>
        <div className={styles.desktopBox}>
            <img className={styles.qrcode} src={qrcode} alt="qr code do ingresso" />
            <div className={styles.box__textos}>
                <h3 className={styles.titulo}>{formulario.nome}</h3>
                <p className={styles.texto}>Ingresso Cortesia</p>
                <p className={styles.texto}>Setor {formulario.ingresso}</p>
                <p className={styles.texto}>Data: 11/03</p>
                <p className={styles.texto}>Local: São Paulo-SP</p>
            </div>
        </div>
    </section>
  )
}
