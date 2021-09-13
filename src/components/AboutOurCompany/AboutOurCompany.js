import React from 'react';
import styles from './aboutOurCompany.module.css'
import Company from '../Company/Company';
import RailsImage from '../RailsImage/RailsImage';

const AboutOurCompany = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>
            О нашей компании
         </div>
         <Company />
         <div className={styles.img}>
            <RailsImage />
         </div>
      </div>

   );
}

export default AboutOurCompany;