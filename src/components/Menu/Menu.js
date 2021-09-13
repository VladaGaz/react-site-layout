import React from 'react';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Phone from '../Phone/Phone';
import MenuBurger from '../MenuBurger/MenuBurger';
import appStyles from '../../app.module.css'
import styles from './menu.module.css'

const Menu = () => {
   return (
      <div className={styles.container} >
         <Logo />
         <Navbar className={appStyles.desktop} />
         <Phone className={appStyles.mobile} />
         <MenuBurger className={appStyles.tablet} />
      </div>
   );
}

export default Menu;