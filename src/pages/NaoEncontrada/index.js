import notFound from './404.jpg';
import styles from './NaoEncontrada.module.css';

export default function NaoEncontrada() {
  return (
    <main>
    <img className={styles.gato} src={notFound} alt="gato 404" />
    </main>

  )
}
