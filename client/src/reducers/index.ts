import { combineReducers } from 'redux';

import { reducer as carsReducer } from './cars/reducer';

export const rootReducer = combineReducers({
  cars: carsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
