import React from 'react';

import Filter from '../filter';
import SortTabs from '../sort-tabs';
import CardList from '../card-list';

import classes from './app.module.scss';
import logo from './img/logo.png';

function App() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <img className={classes['header--logo']} src={logo} alt="Aviasales logo" />
      </header>
      <main className={classes.main}>
        <Filter />
        <section className={classes.core}>
          <SortTabs />
          <div>
            <CardList />
          </div>
          <button type="button" className={classes['show-more-btn']}>
            Показать еще 5 билетов!
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
