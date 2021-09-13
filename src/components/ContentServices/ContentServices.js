import React from 'react';
import styles from './contentServices.module.css'
import FormApplication from '../FormApplication/FormApplication'

const ContentServices = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>Услуги по строительству и ремонту Ж/Д путей</div>
         <div className={styles.description}>Компания проводит строительные и ремонтные работы
            на территории более чем 20 субъектов Российской Федерации</div>
         <FormApplication />
      </div>
   );
}

export default ContentServices;