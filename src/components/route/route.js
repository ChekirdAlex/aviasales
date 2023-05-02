import React from 'react';
import { add, format, parseISO } from 'date-fns';

import classes from './route.module.scss';

function Route({ info }) {
  const { origin, destination, date, duration, stops } = info;
  let stopsTitle;
  switch (stops.length) {
    case 0:
      stopsTitle = 'Без пересадок';
      break;
    case 1:
      stopsTitle = ' 1 пересадка';
      break;
    default:
      stopsTitle = `${stops.length} пересадки`;
  }
  const stopsInfo = stops.join(', ');

  const getDepartureDate = (fullDate) => format(parseISO(fullDate), 'hh:mm');

  const getDestinationDate = (fullDate, final) =>
    format(add(parseISO(fullDate), { hours: Math.trunc(duration / 60), minutes: final % 60 }), 'hh:mm');

  const getFormatTime = (time) => {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;
  };

  return (
    <div className={classes.route}>
      <div className={classes['route--flight']}>
        <div className={`${classes.text} ${classes.title}`}>
          {origin} – {destination}
        </div>
        <div className={classes.text}>
          {getDepartureDate(date)} - {getDestinationDate(date, duration)}
        </div>
      </div>
      <div className={classes['route--time']}>
        <div className={`${classes.text} ${classes.title}`}>В пути</div>
        <div className={classes.text}>{getFormatTime(duration)}</div>
      </div>
      <div className={classes['route--stops']}>
        <div className={`${classes.text} ${classes.title}`}>{stopsTitle}</div>
        <div className={classes.text}>{stopsInfo}</div>
      </div>
    </div>
  );
}

export default Route;

// <div className={classes.route}>
//   <div className={classes['route--flight']}>
//     <div className={`${classes.text} ${classes.title}`}>MOW – HKT</div>
//     <div className={classes.text}>10:45 – 08:00</div>
//   </div>
//   <div className={classes['route--time']}>
//     <div className={`${classes.text} ${classes.title}`}>В пути</div>
//     <div className={classes.text}>21ч 15м</div>
//   </div>
//   <div className={classes['route--stops']}>
//     <div className={`${classes.text} ${classes.title}`}>2 пересадки</div>
//     <div className={classes.text}>HKG, JNB</div>
//   </div>
// </div>
