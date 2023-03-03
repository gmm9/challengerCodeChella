import styles from './Inputs.module.css';

import React from 'react'

export default function Inputs({children, type}) {
  return (
    <div className={styles.container}>
        <label className={styles.label}>{children}</label>
        { type !== 'select'  && <input required className={styles.input} type={type}></input>}
        {type === 'select' && <select required className={styles.input}>
            <option disabled>Tipo de ingresso</option>
            <option value="premium">Pista Premium</option>
            <option value="comum">Pista Comum</option>
            <option value="terreo">Pista Térreo</option>
            <option value="superiores">Pista Superiores</option>
            <option value="rampa">Rampas</option>
        </select>}
    </div>
  )
}
