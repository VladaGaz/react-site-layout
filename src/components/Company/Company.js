import React from 'react';
import styles from './company.module.css'
import document1 from '../../images/document1.svg';
import document2 from '../../images/document2.svg';

const Company = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>
            Компания ООО”Название”
         </div>
         <div className={styles.description}>Оказывает широкий спектр услуг по
            строительству и ремонту железнодорожных путей, Ремонт железнодорожных
            тупиков, стрелочных переводов, переездов. Опытные сотрудники, наличие
            необходимого оборудования позволяет в кратчайшие сроки выполнить работы
            любой сложности качественно и в кратчайшие сроки. Гибкая ценовая политика,
            наличие СРО. Подбор материалов от новых до Б/У от партнёров.</div>
         <div className={styles.images}>
            <img className={styles.img} src={document1} />
            <img className={styles.img} src={document2} />
         </div>
      </div>

   );
}

export default Company;