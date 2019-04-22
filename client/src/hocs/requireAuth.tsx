import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../store';
import { selectors } from '../reducers/auth';

interface History {
  push: (path: string) => void;
}

interface ComposedComponentProps {
  history: History;
  isAuthenticated: boolean;
}

export const requireAuth = (ChildComponent: typeof React.Component) => {
  class ComposedComponent extends React.Component<ComposedComponentProps, null> {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  return connect((state: AppState) => ({
    isAuthenticated: selectors.isAuthenticatedSelector(state),
  }))(ComposedComponent);
};
