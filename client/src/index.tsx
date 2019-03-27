import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore } from './store';

import { Routers } from './router';

import './styles/index.less';

ReactDOM.render(
  <Provider store={createStore()}>
    <Routers />
  </Provider>,
  document.querySelector('#app'),
);
