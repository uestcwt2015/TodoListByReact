import { visibilityFilters } from '../actions';

const filter = (state = visibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
    case 'SET_FILTER_STATUS':
      return action.value;
    default:
      return state;
  }
};

export default filter;