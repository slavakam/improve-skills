import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/index.less';

import { App } from './containers/App';

ReactDOM.render(
  <App name="Unknown" />,
  document.querySelector('#app'),
);
