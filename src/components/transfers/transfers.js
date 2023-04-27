import React from 'react';

import classes from './transfers.module.scss';

function Transfers() {
  return (
    <form className={classes.transfers}>
      <h2 className={classes['transfers--header']}>Количество пересадок</h2>
      <label htmlFor="all" className={classes['transfers--option']}>
        <input className={classes['transfers--input']} type="checkbox" name="all" id="all" value="all" />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>Все</span>
        <br />
      </label>
      <label htmlFor="zero" className={classes['transfers--option']}>
        <input className={classes['transfers--input']} type="checkbox" name="zero" id="zero" value="zero" />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>Без пересадок</span>
        <br />
      </label>
      <label htmlFor="one" className={classes['transfers--option']}>
        <input className={classes['transfers--input']} type="checkbox" name="one" id="one" value="one" />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>1 пересадка</span>
        <br />
      </label>
      <label htmlFor="two" className={classes['transfers--option']}>
        <input className={classes['transfers--input']} type="checkbox" name="two" id="two" value="two" />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>2 пересадки</span>
        <br />
      </label>
      <label htmlFor="three" className={classes['transfers--option']}>
        <input className={classes['transfers--input']} type="checkbox" name="three" id="three" value="three" />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>3 пересадки</span>
        <br />
      </label>
    </form>
  );
}

export default Transfers;
