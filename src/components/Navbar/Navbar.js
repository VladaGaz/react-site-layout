import React from 'react';
import styles from './navbar.module.css'

/*оранжевым выделено контакты*/
const Navbar = ({ className }) => (
   <div className={`${styles.container} ${className}`}>
      <a className={styles.a} href="#">
         <span className={styles.item}>
            Главная
         </span>
      </a>
      <a className={styles.a} href="#">
         <span className={styles.item}>
            Портфолио
         </span>
      </a>
      <a className={styles.a} href="#">
         <span className={styles.item}>
            О нас
         </span>
      </a>
      <a className={styles.a} href="#">
         <span className={styles.item}>
            География
         </span>
      </a>
      <a className={styles.a} href="#">
         <span className={styles.item}>
            Контакты
         </span>
      </a>
   </div >
);

export default Navbar