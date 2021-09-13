import React from 'react';
import styles from './contentGeography.module.css'
import russia from '../../images/russia.svg';


const ContentGeography = () => {
   return (
      <div className={styles.container}>
         <div className={styles.content}>
            <div className={styles.title}>География работ</div>
            <div className={styles.text}>ООО «Путьремстрой» реализует проекты на всей территории Российской Федерации.</div>
            <div className={styles.description}>Компания проводит строительные и ремонтные работы на территории более
               чем 20 субъектов Российской Федерации, постоянно расширяя географию присутствия на всю территорию страны.
               Работа компании ведется как в крупных городах областного значения, так и в небольших населенных пунктах.
               Заказчиками могут быть региональные или федеральные компании, крупные компании из разных сфер деятельности,
               заинтересованные в осуществлении транспортных проектов.</div>
         </div>
         <img className={styles.img} src={russia} />
      </div>
   );
}

export default ContentGeography;