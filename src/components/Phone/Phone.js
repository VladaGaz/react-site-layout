import React from 'react';
import styles from './phone.module.css'
import phoneCall from '../../images/phoneCall.svg';

const Phone = ({ className }) => {

   return (
      /*два className это нормально?*/
      <div className={`${styles.container} ${className}`}>
         <img className={styles.img} src={phoneCall} />
         <span className={styles.span} >8(902)272-93-14</span>
      </div>
   )
}

export default Phone