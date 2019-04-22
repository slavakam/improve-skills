import { combineReducers } from 'redux';

import { reducer as carReducer } from './cars';
import { reducer as authReducer } from './auth';

export const rootReducer = combineReducers({
  cars: carReducer,
  auth: authReducer,
});
