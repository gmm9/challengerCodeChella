import Banner from 'components/Banner';
import MoldeFormulario from 'components/MoldeFormulario';
import React from 'react'
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
