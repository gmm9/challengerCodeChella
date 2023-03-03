import BotaoPrincipal from 'components/BotaoPrincipal';
import Inputs from 'components/Inputs';
import styles from './MoldeFormulario.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function MoldeFormulario() {
  return (
    <section className={styles.container}>
        <h2 className={styles.titulo}>Preencha o formulário a seguir:</h2>
        <form className={styles.form}>
            <Inputs type={"text"}>Nome completo:</Inputs>
            <Inputs type={"email"}>Email:</Inputs>
            <div className={styles.form__dupla}>
            <Inputs type={"select"}>Tipo de ingresso:</Inputs>
            <Inputs type={"date"}>Data de nascimento:</Inputs>
            </div>
            <div className={styles.divBotao}>
                <BotaoPrincipal icone={<AiOutlineArrowRight />}>
                Avançar
                </BotaoPrincipal>
            </div>
        </form>
    </section>
  )
}
