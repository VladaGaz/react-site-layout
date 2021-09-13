import React from 'react';
import styles from './wrapper.module.css'
import Menu from '../Menu/Menu';
import Content from '../Content/Content';
import Portfolio from '../Portfolio/Portfolio';
import Benefits from '../Benefits/Benefits';
import AboutOurCompany from '../AboutOurCompany/AboutOurCompany'
import Сontacts from '../Сontacts/Сontacts';

import Footer from '../Footer/Footer';

const Wrapper = () => {
   return (
      <div className={styles.container}>
         <Menu />
         <Content />
         <Portfolio />
         <Benefits />
         <AboutOurCompany />
         <Сontacts />
         <Footer />
      </div>
   )
}

export default Wrapper