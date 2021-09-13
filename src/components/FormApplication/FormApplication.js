import React from 'react';
import styles from './formApplication.module.css'
import Button from '../Button/Button'

const FormApplication = () => {
   return (
      <form className={styles.form}>
         <div className={styles.text}>Оставьте заявку на
            <a href="#" className={styles.a}> бесплатную </a>
            консультацию
         </div>
         <div class={styles.container}>
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
            <div className={styles.buttons}>
               <Button text={'ОТПРАВИТЬ'} />
            </div>
         </div>

      </form>
   );
}

export default FormApplication;