import React from 'react';
import styles from './railsImage.module.css'
import railsImage from '../../images/railsImage.svg';

const RailsImage = () => {
   return (
      <img className={styles.img} src={railsImage} />
   )
}

export default RailsImage