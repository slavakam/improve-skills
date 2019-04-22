import * as React from 'react';

import { LoginForm } from '../components/LoginForm';

interface LoginContainerState {
  email: string;
  password: string;
}

export class LoginContainer extends React.Component<null, LoginContainerState> {
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

  render() {
    const { email, password } = this.state;
    return (
      <LoginForm
        email={email}
        password={password}
        onInputChange={this.onInputChange}
      />
    );
  }
}

// export const SignupContainer = connect( )(SignupContainerComponent);
