import * as React from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm';

import { loginUserThunk } from '../thunks/auth';

interface History {
  push: (path: string) => void;
}

interface LoginContainerProps {
  loginUser: (email: string, password: string, cb: () => void) => void;
  history: History;
}

interface LoginContainerState {
  email: string;
  password: string;
}

class LoginContainerComponent extends React.Component<LoginContainerProps, LoginContainerState> {
  state = {
    email: '',
    password: '',
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  }

  onLoginClick = () => {
    this.props.loginUser(this.state.email, this.state.password, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        email={email}
        password={password}
        onInputChange={this.onInputChange}
        onLoginClick={this.onLoginClick}
      />
    );
  }
}

export const LoginContainer = connect(null, {
  loginUser: loginUserThunk,
})(LoginContainerComponent);
