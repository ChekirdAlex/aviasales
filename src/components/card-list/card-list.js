import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../card';
import { getTickets } from '../../redux/actions';

import classes from './card-list.module.scss';

function CardList() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <ul className={classes['card-list']}>
      {tickets.slice(0, 5).map((ticketInfo) => (
        <li key={`${ticketInfo.price}${ticketInfo.carrier}${ticketInfo.segments[0].stops}`}>
          <Card ticketInfo={ticketInfo} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
