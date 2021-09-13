import React from 'react';
import ContentServices from '../ContentServices/ContentServices';
import ContentGeography from '../ContentGeography/ContentGeography';
import styles from './content.module.css'

const Content = () => {
   return (
      <div className={styles.container} >
         <ContentServices />
         <ContentGeography />
      </div>
   );
}

export default Content;