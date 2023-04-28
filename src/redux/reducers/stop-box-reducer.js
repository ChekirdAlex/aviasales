import { SET_STOP_BOX } from '../actions';

const initialState = {
  all: {
    id: 'all',
    checked: true,
  },
  nonStop: {
    id: 'nonStop',
    checked: true,
  },
  oneStop: {
    id: 'oneStop',
    checked: true,
  },
  twoStops: {
    id: 'twoStops',
    checked: true,
  },
  threeStops: {
    id: 'threeStops',
    checked: true,
  },
};

export const stopBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOP_BOX: {
      let newState = JSON.parse(JSON.stringify(state));
      let buttons = Object.entries(newState);
      const clickedBtn = buttons.find((item) => item.includes(action.payload));
      const btnName = clickedBtn[0];

      if (action.payload === btnName) {
        newState = { ...newState, [btnName]: { ...state[btnName], checked: !state[btnName].checked } };
      }

      const isAllChecked = newState.all.checked;
      buttons = Object.entries(newState);
      const otherButtons = buttons.slice(1);

      if (btnName === 'all') {
        const result = buttons.map((item) => [item[0], { id: item[0], checked: isAllChecked }]);
        newState = Object.fromEntries(result);
      }

      if (btnName !== 'all') {
        const areAllTrue = otherButtons.every((item) => item[1].checked);
        if (areAllTrue) {
          newState = { ...newState, all: { ...state.all, checked: true } };
        }
        if (!areAllTrue) {
          newState = { ...newState, all: { ...state.all, checked: false } };
        }
      }

      return newState;
    }
    default:
      return state;
  }
};
