import React from 'react';

import classes from './filter.module.scss';

function Filter() {
  return (
    <div className={classes.filter}>
      <button type="button" className={classes['filter--button']}>
        Самый дешевый
      </button>
      <button type="button" className={classes['filter--button']}>
        Самый быстрый
      </button>
    </div>
  );
}

export default Filter;
