import TicketService from '../../services/ticket-service';

export const SET_FILTER = 'SET_FILTERS';
export const GET_TICKETS = 'GET_TICKETS';

export const setFilter = (stopsId) => ({ type: SET_FILTER, payload: stopsId });

// export const getTickets = (testName) => ({ type: GET_TICKETS, payload: testName });

const ticketService = new TicketService();

export const getTickets = () => async (dispatch) => {
  await ticketService.getSearchId();
  const res = await ticketService.getTickets();
  dispatch({ type: GET_TICKETS, payload: res.tickets });
};
