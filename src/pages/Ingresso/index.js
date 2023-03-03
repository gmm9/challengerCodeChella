import Banner from 'components/Banner';
import React from 'react'
import ingressoBanner from './ingressoBanner.jpg';

export default function Ingresso() {
  return (
    <main>
        <Banner img={ingressoBanner}>
            Garanta seu ingresso
        </Banner>
    </main>
  )
}
