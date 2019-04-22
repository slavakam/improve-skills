import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { requireAuth } from '../hocs/requireAuth';

import { CarsContainer } from '../containers/CarsContainer';
import { RegistrationContainer } from '../containers/RegistrationContainer';
import { LoginContainer } from '../containers/LoginContainer';
import { HeaderContainer } from '../containers/HeaderContainer';

console.log('hello');

export const Routers = (): JSX.Element => {
  return (
    <Router>
      <React.Fragment>
        <HeaderContainer />
        <Route exact path="/" component={requireAuth(CarsContainer)} />
        <Route exact path="/signup" component={RegistrationContainer} />
        <Route exact path="/login" component={LoginContainer} />
      </React.Fragment>
    </Router>
  );
};
