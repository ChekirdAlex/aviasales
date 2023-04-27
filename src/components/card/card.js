import React from 'react';

import Route from '../route';

import classes from './card.module.scss';
import airline from './img/airline.png';

function Card() {
  return (
    <div className={classes.card}>
      <div className={classes['card--header']}>
        <span className={classes['card--price']}>13 400 Р </span>
        <img className={classes['card--airline']} src={airline} alt="airline" />
      </div>
      {/* Прямой рейс */}
      <Route />
      {/* Обратный рейс */}
      <Route />
    </div>
  );
}

export default Card;
