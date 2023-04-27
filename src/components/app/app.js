import React from 'react';

import Transfers from '../transfers';
import Filter from '../filter';
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
        <Transfers />
        <section className={classes.core}>
          <Filter />
          <div>
            <CardList />
          </div>
          <button type="button" className={classes['add-btn']}>
            Показать еще 5 билетов!
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
