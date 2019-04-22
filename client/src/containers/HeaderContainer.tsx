import * as React from 'react';
import { connect } from 'react-redux';

import { Header } from '../components/Header';

import { selectors } from '../reducers/auth';
import { AppState } from '../store';
import { logoutUserAction } from '../actions/auth';

interface HeaderContainerProps {
  logoutUser: () => void;
  isAuthenticated: boolean;
}

class HeaderContainerComponent extends React.Component<HeaderContainerProps, null> {
  onLogoutClick = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <Header
        isAuthenticated={this.props.isAuthenticated}
        onLogoutClick={this.onLogoutClick}
      />
    );
  }
}

export const HeaderContainer = connect((state: AppState) => ({
  isAuthenticated: selectors.isAuthenticatedSelector(state),
}), {
  logoutUser: logoutUserAction,
})(HeaderContainerComponent);
