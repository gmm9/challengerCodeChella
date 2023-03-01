import styles from './NavBar.module.css';
import logo from './logoBranca.png'
import MenuLink from 'components/MenuLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import MenuMobile from 'components/MenuMobile';


export default function NavBar() {

  const [hamburger, setHamburger] = useState(false);

  return (
    <>
    <nav className={styles.navbar}>
        <div><MenuLink to="/"><img className={styles.navbar__img} src={logo} alt="logo da codeChella" /></MenuLink></div>
        <div>
      {hamburger ? <AiOutlineClose className={styles.menuHamburger} onClick={() => {
          setHamburger(!hamburger);
        }} /> : <GiHamburgerMenu className={styles.menuHamburger} onClick={() => {
          setHamburger(!hamburger);
        }} />}
        <ul className={styles.navList}>
            <li><MenuLink to="/experiencia">A experiência</MenuLink></li>
            <li><MenuLink to="/mapa">Mapa de Setores</MenuLink></li>
            <li><MenuLink to="/informacao">Informações</MenuLink></li>
            <li><MenuLink to="/ingresso">Ingresso</MenuLink></li>
        </ul>
        </div>
    </nav>
    {hamburger ? <MenuMobile /> : ""}
    </>
  )
}
