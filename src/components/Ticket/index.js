import styles from './Ticket.module.css';

import React from 'react'

export default function Ticket() {
  return (
    <section className={styles.container}>
        <div>
            <p>Logo</p>
            <p>OutraLogo</p>
        </div>
        <div>
            <p>QRCODE</p>
            <div>
                <p>Dados</p>
            </div>
        </div>
    </section>
  )
}
