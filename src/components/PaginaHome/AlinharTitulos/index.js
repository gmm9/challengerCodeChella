import styles from './AlinharTitulos.module.css';

import React from 'react'

export default function AlinharTitulos({children}) {
  return (
    <div className={styles.alinharTitulos}>{children}</div>
  )
}
