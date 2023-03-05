import BotaoPrincipal from 'components/Padrao/BotaoPrincipal';
import Inputs from 'components/Padrao/Inputs';
import styles from './MoldeFormulario.module.css';
import {AiOutlineArrowRight} from 'react-icons/ai'
import BotaoMover from 'components/Padrao/BotaoMover';

export default function MoldeFormulario() {
  return (
    <section className={styles.container}>
        <h2 className={styles.titulo}>Preencha o formulário a seguir:</h2>
        <form className={styles.form}>
            <Inputs name="nome" type={"text"}>Nome completo:</Inputs>
            <Inputs name="email" type={"email"}>Email:</Inputs>
            <div className={styles.form__dupla}>
            <Inputs name="ingresso" type={"select"}>Tipo de ingresso:</Inputs>
            <Inputs name="data" type={"date"}>Data de nascimento:</Inputs>
            </div>
            <div className={styles.divBotao}>
                <BotaoMover to="/sucesso">        
                <BotaoPrincipal icone={<AiOutlineArrowRight />}>
                Avançar
                </BotaoPrincipal>
                </BotaoMover>   
            </div>
        </form>
    </section>
  )
}
