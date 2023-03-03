import DropdownInfo from 'components/DropdownInfo';
import styles from './InfoSection.module.css';

export default function InfoSection() {
  return (
    <section className={styles.container}>
        <h2 className={styles.titulo}>Perguntas Frequentes:</h2>

        <div className={styles.dropDiv}>
            <DropdownInfo titulo="Quais serão as atrações?">
            Teremos dois dias de shows, o primeiro (11/03) 
            com bandas de rock, e o segundo (12/03) com bandas pop.
             Confira o line-up em detalhes clicando neste link!
            </DropdownInfo>

            <DropdownInfo titulo="Qual é a classificação etária?">
            A classificação indicativa feita pelo ClassInd se aplica 
            ao cinema, televisão, livros e RPG, jogos e aplicativos,
             e são separados nas seguintes idades: 10, 12, 14, 16, 18 
             anos ou Livre, classificada pela letra L.
            </DropdownInfo>

            <DropdownInfo titulo="Quais são os setores disponíveis?">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </DropdownInfo>

            <DropdownInfo titulo="Quais são os itens proibidos?">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </DropdownInfo>

            <DropdownInfo titulo="Quais são seus planos?">
            Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </DropdownInfo>

        </div>
    </section>
  )
}
