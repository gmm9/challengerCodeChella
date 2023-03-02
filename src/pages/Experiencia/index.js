// import styles from './Experiencia.module.css';
import imgBanner from './experienciaBanner.jpg'
import Banner from 'components/Banner';
import moca1peq from './imagens/moca1peq.jpg';
import sacola1peq from './imagens/sacola1peq.jpg';
import roda1peq from './imagens/roda1peq.jpg';
import SectionExperiencia from 'components/SectionExperiencia';

export default function Experiencia() {
  return (
    <main>
      <Banner img={imgBanner}>A Experiência</Banner>
      <SectionExperiencia img={moca1peq} titulo="Acessibilidade e Inclusão">
      Nosso evento tenta abraçar um público mais amplo em todos os sentidos,
       de todas as idades, corpos, gostos e pensamentos!  Isso está presente
      no  espaço físico, na sinalização, no treinamento da equipe de apoio,
      na comunicação em libras, braile, visual e tátil. Além disso, dispomos
      de ingressos gratuitos para pessoas com deficiência e acompanhantes,
        pessoas idosas e crianças!
      </SectionExperiencia>
      <SectionExperiencia img={sacola1peq} classExclusiva="classExclusiva" titulo="Sustentabilidade">
      Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
       levamos o futuro do nosso planeta a sério. Nosso festival é
        carbono zero, com utilização de copos retornáveis, coleta e 
        destinação adequada de resíduos, e transporte coletivo.
      </SectionExperiencia>
      <SectionExperiencia img={roda1peq} titulo="Atrações">
      Intervenções artísticas e culturais para todos os gostos! 
      Durante os intervalos dos shows, nossa experiência contará 
      com recreação para crianças, oficina de cerâmica, origami,
       circo e aquarela! Além disso, nosso espaço contra com 3 
       praças de alimentação, roda gigante e outros brinquedos!
      </SectionExperiencia>
    </main>
  )
}
