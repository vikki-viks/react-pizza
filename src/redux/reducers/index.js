import { combineReducers } from 'redux';

import filtersReducers from './filters';
import pizzasReducers from './pizzas';

const rootReducers = combineReducers({
  filtersReducers,
  pizzasReducers,
});

export default rootReducers;
