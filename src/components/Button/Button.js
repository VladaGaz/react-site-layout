import React from 'react';
import styles from './button.module.css'

const Button = ({ text }) => {
   return (
      <button className={styles.button}>
         <span className={styles.span}>
            {text}
         </span>
      </button>
   );
}

export default Button;