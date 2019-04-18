import { combineReducers } from 'redux';

import { reducer as carReducer } from './cars';

export const rootReducer = combineReducers({
  cars: carReducer,
});
