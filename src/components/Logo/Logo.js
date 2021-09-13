import React from 'react';
import styles from './logo.module.css'
import logo from '../../images/logo.svg';

const Logo = () => {
   return (
      <div className={styles.container}>
         <img className={styles.img} src={logo} />
         <div>
            <header className={styles.header}>Название</header>
            <span className={styles.span}>И какой-нибудь лозунг</span>
         </div>
      </div>
   )
}

export default Logo