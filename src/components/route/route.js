import React from 'react';

import classes from './route.module.scss';

function Route() {
  return (
    <div className={classes.route}>
      <div className={classes['route--flight']}>
        <div className={`${classes.text} ${classes.title}`}>MOW – HKT</div>
        <div className={classes.text}>10:45 – 08:00</div>
      </div>
      <div className={classes['route--time']}>
        <div className={`${classes.text} ${classes.title}`}>В пути</div>
        <div className={classes.text}>21ч 15м</div>
      </div>
      <div className={classes['route--stops']}>
        <div className={`${classes.text} ${classes.title}`}>2 пересадки</div>
        <div className={classes.text}>HKG, JNB</div>
      </div>
    </div>
  );
}

export default Route;
