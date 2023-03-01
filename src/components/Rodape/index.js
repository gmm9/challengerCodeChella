import styles from './Rodape.module.css';
import logo from './logo.png';
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsTwitch} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrTwitter} from 'react-icons/gr'
import React from 'react'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
    <img src={logo} alt="logo da codechella" />
    <div>
    <p>Acesse nossas redes</p>
    <ul className={styles.icones}>
        <li><AiOutlineWhatsApp /></li>
        <li><BsTwitch /></li>
        <li><AiOutlineInstagram /></li>
        <li><GrTwitter /></li>
    </ul>
    </div>
        <p>Desenvolvido por Alura/Gabriel. Projeto ficticio sem fins comerciais</p>
    </footer>
  )
}
