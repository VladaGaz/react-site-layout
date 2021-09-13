import React from 'react'
import styles from './gallery.module.css';
import PortfolioImage from '../PortfolioImage/PortfolioImage';
import PortfolioDescription from '../PortfolioDescription/PortfolioDescription';

const Gallery = () => (
   <div className={styles.gallery}>
      <PortfolioImage />
      <PortfolioDescription />
   </div>
)

export default Gallery
