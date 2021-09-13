import React from 'react';
import burger from '../../images/burger.svg';

const MenuBurger = ({ className }) => {
   return (
      <div className={className} >
         <img src={burger} />
      </div>
   )
}

export default MenuBurger