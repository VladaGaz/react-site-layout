import React from 'react';
import styles from './portfolioImage.module.css'
import rails from '../../images/rails.svg';


const PortfolioImage = () => {
   return (
      <img className={styles.img} src={rails} />
   )
}

export default PortfolioImage