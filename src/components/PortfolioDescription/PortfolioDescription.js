import React from 'react';
import styles from './portfolioDescription.module.css'
import Button from '../Button/Button'
import vector from '../../images/vector.svg';

const PortfolioDescription = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>Ремонт эстакад</div>
         <div className={styles.description}>Капитальный ремонт и еще че нибудь напишите а то слишком мало выходит</div>
         <div className={styles.header}>Проделанные работы:</div>
         <ul className={styles.ul}>
            <span className={styles.span}>
               <img src={vector} />
               <li className={styles.li}>Выкопали ямы (незнай зачем)</li>
            </span>
            <span className={styles.span}>
               <img src={vector} />
               <li className={styles.li}>Рельсы рельсы, шпалы шпалы</li>
            </span>
            <span className={styles.span}>
               <img src={vector} />
               <li className={styles.li}>Положили рельсы</li>
            </span>
            <span className={styles.span}>
               <img src={vector} />
               <li className={styles.li}>Ехал поезд запоздалый</li>
            </span>
         </ul>
         <div className={styles.button}>
            <Button text={'ОСТАВИТЬ ЗАЯВКУ'} />
         </div>
      </div>
   )
}

export default PortfolioDescription