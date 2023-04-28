import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setStopBox } from '../../redux/actions';

import classes from './transfers.module.scss';

function Transfers() {
  const dispatch = useDispatch();
  const stopBox = useSelector((state) => state.stopBox);
  const { all, nonStop, oneStop, twoStops, threeStops } = stopBox;

  return (
    <form className={classes.transfers}>
      <h2 className={classes['transfers--header']}>Количество пересадок</h2>
      <label htmlFor="all" className={classes['transfers--option']}>
        <input
          onChange={() => dispatch(setStopBox(all.id))}
          className={classes['transfers--input']}
          type="checkbox"
          name="all"
          id="all"
          value="all"
          checked={all.checked}
        />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>Все</span>
        <br />
      </label>
      <label htmlFor="nonStop" className={classes['transfers--option']}>
        <input
          onChange={() => dispatch(setStopBox(nonStop.id))}
          className={classes['transfers--input']}
          type="checkbox"
          name="nonStop"
          id="nonStop"
          value="zero"
          checked={nonStop.checked}
        />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>Без пересадок</span>
        <br />
      </label>
      <label htmlFor="oneStop" className={classes['transfers--option']}>
        <input
          onChange={() => dispatch(setStopBox(oneStop.id))}
          className={classes['transfers--input']}
          type="checkbox"
          name="one"
          id="oneStop"
          value="one"
          checked={oneStop.checked}
        />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>1 пересадка</span>
        <br />
      </label>
      <label htmlFor="twoStops" className={classes['transfers--option']}>
        <input
          onChange={() => dispatch(setStopBox(twoStops.id))}
          className={classes['transfers--input']}
          type="checkbox"
          name="two"
          id="twoStops"
          value="two"
          checked={twoStops.checked}
        />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>2 пересадки</span>
        <br />
      </label>
      <label htmlFor="threeStops" className={classes['transfers--option']}>
        <input
          onChange={() => dispatch(setStopBox(threeStops.id))}
          className={classes['transfers--input']}
          type="checkbox"
          name="three"
          id="threeStops"
          value="three"
          checked={threeStops.checked}
        />
        <div className={classes['transfers--box']} />
        <span className={classes['transfers--text']}>3 пересадки</span>
        <br />
      </label>
    </form>
  );
}

export default Transfers;
