import React from 'react';
import styles from './benefits.module.css'
import money from '../../images/money.svg';
import eject from '../../images/eject.svg';
import lightbulb from '../../images/lightbulb.svg';
import thumbsUp from '../../images/thumbsUp.svg';
import wallet from '../../images/wallet.svg';
import circleWavyCheck from '../../images/circleWavyCheck.svg';

const Benefits = () => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>Преимущества работы с нами</div>
         <div className={styles.box}>
            <div className={styles.item}>
               <img src={money} />
               <div>
                  <span className={styles.header}>Экономия стредств</span>
                  <div className={styles.description}>Специалисты нашей компании грамотно рассчитываю объем работ
                     и количество затрачиваемых материалов, что позволяет исключить
                     дополнительные расходы на заключительных этапах.</div>
               </div>
            </div>
            <div className={styles.item}>
               <img src={eject} />
               <div>
                  <span className={styles.header}>Оперативность</span>
                  <div className={styles.description}>Один из ключевых факторов нашей работы. Скорость реагирования
                     — залог бесперебойной работы железнодорожного транспорта.</div>
               </div>
            </div>
            <div className={styles.item}>
               <img src={lightbulb} />
               <div>
                  <span className={styles.header}>Большой опыт</span>
                  <div className={styles.description}>За 2020 год наша компания уложила более 5 километров новых
                     железнодорожных путей и отремонтировала более 30 километров.</div>
               </div>
            </div>
            <div className={styles.item}>
               <img src={thumbsUp} />
               <div>
                  <span className={styles.header}>Высокий сервис</span>
                  <div className={styles.description}>Наша компания открыта для поиска оптимальных решений с целью
                     достижения поставленных клиентами задач.</div>
               </div>
            </div>
            <div className={styles.item}>
               <img src={wallet} />
               <div>
                  <span className={styles.header}>Удобная оплата</span>
                  <div className={styles.description}>Постоянный поставщик, сертифицированные материалы. Все сотрудники
                     имеют высокую квалификацию. Работы выполняются современными
                     специализированными инструментами и оборудованием.</div>
               </div>
            </div>
            <div className={styles.item}>
               <img src={circleWavyCheck} />
               <div>
                  <span className={styles.header}>Качество</span>
                  <div className={styles.description}>Для постоянных клиентов существует возможность оплаты в рассрочку.
                     Предлагаем поэтапную оплату или работаем с предоплатой менее 40%.</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Benefits;