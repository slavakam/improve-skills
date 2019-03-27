import { createStore as createReduxStore, compose } from 'redux';

import { rootReducer } from '../reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

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
