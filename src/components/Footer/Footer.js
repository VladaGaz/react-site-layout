import React from 'react';
import styles from './footer.module.css'
import logotype from '../../images/logotype.svg';


const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>
            Все права защищены.
         </div>
         <div className={styles.box}>
            <img className={styles.img} src={logotype} />
            <div className={styles.site}>
               <p className={styles.p}>Разработка сайта </p>
               <p className={styles.p}>- студия “ТвойСтартап”</p>
            </div>
         </div>
      </div>

   );
}

export default Footer;