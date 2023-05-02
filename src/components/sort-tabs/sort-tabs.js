import React from 'react';

import classes from './sort-tabs.module.scss';

function SortTabs() {
  return (
    <div className={classes['sort-tabs']}>
      <button type="button" className={classes['sort-tabs--button']}>
        Самый дешевый
      </button>
      <button type="button" className={classes['sort-tabs--button']}>
        Самый быстрый
      </button>
    </div>
  );
}

export default SortTabs;
