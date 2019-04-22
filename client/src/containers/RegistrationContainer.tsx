import * as React from 'react';

import { RegistrationForm } from '../components/RegistrationForm';

interface RegistrationContainerState {
  email: string;
  password: string;
}

export class RegistrationContainer extends React.Component<null, RegistrationContainerState> {
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
      <RegistrationForm
        email={email}
        password={password}
        onInputChange={this.onInputChange}
      />
    );
  }
}

// export const SignupContainer = connect( )(SignupContainerComponent);
