import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CarsContainer } from '../containers/CarsContainer';

export const Routers = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={CarsContainer} />
    </Router>
  );
};
