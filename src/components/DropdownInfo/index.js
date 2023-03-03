import styles from './DropdownInfo.module.css';
import {AiFillCaretUp} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'
import { useState } from 'react';

export default function DropdownInfo({children, titulo}) {
  const [mostrarTexto, setMostrarTexto] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.dropdown} onClick={() => setMostrarTexto(!mostrarTexto)}>{titulo}{mostrarTexto ? <AiFillCaretUp /> : <AiFillCaretDown /> }</button>
      {mostrarTexto && <p className={styles.texto}>{children}</p>}
    </div>
  );
}
