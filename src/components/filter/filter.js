import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/actions';

import classes from './filter.module.scss';

function Filter() {
  const dispatch = useDispatch();
  const stopBox = useSelector((state) => state.filter);
  const { all, nonStop, oneStop, twoStops, threeStops } = stopBox;

  return (
    <form className={classes.filter}>
      <h2 className={classes['filter--header']}>Количество пересадок</h2>
      <label htmlFor="all" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(all.id))}
          className={classes['filter--input']}
          type="checkbox"
          name="all"
          id="all"
          value="all"
          checked={all.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>Все</span>
        <br />
      </label>
      <label htmlFor="nonStop" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(nonStop.id))}
          className={classes['filter--input']}
          type="checkbox"
          name="nonStop"
          id="nonStop"
          value="zero"
          checked={nonStop.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>Без пересадок</span>
        <br />
      </label>
      <label htmlFor="oneStop" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(oneStop.id))}
          className={classes['filter--input']}
          type="checkbox"
          name="one"
          id="oneStop"
          value="one"
          checked={oneStop.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>1 пересадка</span>
        <br />
      </label>
      <label htmlFor="twoStops" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(twoStops.id))}
          className={classes['filter--input']}
          type="checkbox"
          name="two"
          id="twoStops"
          value="two"
          checked={twoStops.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>2 пересадки</span>
        <br />
      </label>
      <label htmlFor="threeStops" className={classes['filter--option']}>
        <input
          onChange={() => dispatch(setFilter(threeStops.id))}
          className={classes['filter--input']}
          type="checkbox"
          name="three"
          id="threeStops"
          value="three"
          checked={threeStops.checked}
        />
        <div className={classes['filter--box']} />
        <span className={classes['filter--text']}>3 пересадки</span>
        <br />
      </label>
    </form>
  );
}

export default Filter;
