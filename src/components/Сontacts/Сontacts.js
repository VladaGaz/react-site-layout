import React from 'react';
import styles from './contacts.module.css'
import WhatsApp from '../../images/WhatsApp.svg';
import phone from '../../images/phone.svg';
import message from '../../images/message.svg';
import FormQuestions from '../FormQuestions/FormQuestions';




const Сontacts = () => {
   return (
      <div className={styles.position}>
         <div className={styles.container}>
            <div className={styles.title}>
               Контакты
            </div>
            <div>
               <div className={styles.box}>
                  <div className={styles.name}>Телефон:</div>
                  <div>
                     <div className={styles.information}>8(902)272-93-14</div>
                     <div className={styles.information}>8(982)178-03-07</div>
                  </div>
               </div>
               <div className={styles.box}>
                  <div className={styles.name}>E-mail:</div>
                  <div>
                     <div className={styles.information}>nasvaniye@mail.ru</div>
                  </div>
               </div>
               <div className={styles.box}>
                  <div className={styles.name}>Адрес:</div>
                  <div>
                     <div className={styles.information}>г. Екатеринбург, ул.  Колмогорова, дом 67</div>
                  </div>
               </div>
            </div>
            <div className={styles.title}>ООО “Название”</div>
            <img className={styles.img} src={WhatsApp} />
            <img className={styles.img} src={phone} />
            <img className={styles.img} src={message} />
         </div>
         <FormQuestions />
      </div>
   );
}

export default Сontacts;