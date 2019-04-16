import { createStore as createReduxStore, compose, combineReducers } from 'redux';

import { reducer as carsReducer } from './cars/reducer';

const rootReducer = combineReducers({
  cars: carsReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type AppState = ReturnType<typeof rootReducer>;

export const createStore = () => {
  const composeEnhancers = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;


  const store = createReduxStore(
    rootReducer,
    composeEnhancers(),
  );

  return store;
};
