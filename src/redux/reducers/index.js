import { combineReducers } from 'redux';

import filters from './filters';
import pizzas from './pizzas';

const rootReducers = combineReducers({
  filters,
  pizzas,
});

export default rootReducers;
