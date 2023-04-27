import React from 'react';

import Card from '../card';

import classes from './card-list.module.scss';

function CardList() {
  return (
    <ul className={classes['card-list']}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  );
}

export default CardList;
