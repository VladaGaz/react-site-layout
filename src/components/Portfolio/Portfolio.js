import React from 'react';
import styles from './portfolio.module.css'
import Gallery from '../Gallery/Gallery';
import PortfolioImage from '../PortfolioImage/PortfolioImage';
import PortfolioDescription from '../PortfolioDescription/PortfolioDescription';

const Portfolio = () => {
   return (
      <div className={styles.container}>
         <div className={styles.text}>Наше портфолио</div>
         <Gallery>
            <PortfolioImage />
            <PortfolioDescription />
         </Gallery>
      </div>
   )
}

export default Portfolio