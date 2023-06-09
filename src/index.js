import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';
import { App } from './components/app';
import { store } from './redux/store';
import { TicketService } from './services/ticket-service';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ticketService = new TicketService();

ticketService.getSearchId().then(() => {
  ticketService.getTickets();
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
