import React from 'react';

import Route from '../route';

import classes from './card.module.scss';

function Card({ ticketInfo }) {
  const { price, segments } = ticketInfo;

  const getPrice = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (
    <div className={classes.card}>
      <div className={classes['card--header']}>
        <span className={classes['card--price']}>{getPrice(price)} Р </span>
        <img className={classes['card--airline']} src={`//pics.avs.io/99/36/${ticketInfo.carrier}.png`} alt="airline" />
      </div>
      {/* Прямой рейс */}
      <Route info={segments[0]} />
      {/* Обратный рейс */}
      <Route info={segments[1]} />
    </div>
  );
}

export default Card;
