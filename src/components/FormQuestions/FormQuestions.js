import React from 'react';
import styles from './formQuestions.module.css'
import Button from '../Button/Button'

const FormQuestions = () => {
   return (
      <form className={styles.form}>
         <span className={styles.text}>Остались вопросы?</span>
         <div class={styles.container}>
            <div>
               <div className={styles.box}>
                  <label className={styles.label}>Имя</label>
                  <input className={styles.input} placeholder="Михаил"></input>
               </div>
               <div className={styles.box}>
                  <label className={styles.label}>Телефон</label>
                  <input className={styles.input} placeholder="8 (800) 535 35 35"></input>
               </div>
               <div className={styles.box}>
                  <label className={styles.label}>Почта</label>
                  <input className={styles.input} placeholder="company@mail.com"></input>
               </div>
            </div>
            <div className={styles.box}>
               <label className={styles.label}>Комментарий</label>
               <input className={styles.comment} placeholder="Напишите ваш вопрос..."></input>
            </div>
         </div>

         <div class={styles.grid}>
            <div class={styles.button} >
               <Button text={'ОТПРАВИТЬ'} />
            </div>
            <div className={styles.confidentialityBox} >
               <input type="checkbox" className={styles.checkbox} checked />
               <label className={styles.confidentiality} >Даю свое согласие c
                  <a href="#" className={styles.a}> политикой конфиденциальности </a>
               </label>
            </div>
         </div>

      </form >
   );
}

export default FormQuestions;