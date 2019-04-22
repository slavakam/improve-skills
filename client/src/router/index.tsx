import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { CarsContainer } from '../containers/CarsContainer';
import { RegistrationContainer } from '../containers/RegistrationContainer';
import { LoginContainer } from '../containers/LoginContainer';

export const Routers = (): JSX.Element => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={CarsContainer} />
        <Route exact path="/registration" component={RegistrationContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </React.Fragment>
    </Router>
  );
};
