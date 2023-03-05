import styles from './SetoresDetalhes.module.css';
import pista from './imagens/pista.png';
import pistaPremium from './imagens/pistaPremium.png';
import cadeiras from './imagens/cadeiras.png';
import DetalhesConteudo from 'components/PaginaMapa/DetalhesConteudo';

export default function SetoresDetalhes() {
  return (
    <section className={styles.container}>
        <h2 className={styles.titulo}>Mais detalhes sobre os setores:</h2>
        <div className={styles.boxSetores}>
            <DetalhesConteudo img={pista} titulo="Pista">
            Pista convencional, atendida pelos bares e banheiros das laterais 
            do estádio. Espaço amplo, com local para sentar e descansar. Separada
             da pista premium por uma grade.
            </DetalhesConteudo>
            <DetalhesConteudo editMargin='editMargin'  img={pistaPremium}  titulo="Pista Premium">
            Pista mais próxima do palco, com acesso muito próximo a banheiros
             e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência
              têm direito a acesso gratuito a essa área.
            </DetalhesConteudo>
            <DetalhesConteudo img={cadeiras} titulo="Cadeiras">
            Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e
             bares, visão um pouco elevada em relação às pistas.
            </DetalhesConteudo>
        </div>
    </section>    
  )
}
