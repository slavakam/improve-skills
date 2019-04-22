import * as React from 'react';
import { connect } from 'react-redux';

import { RegistrationForm } from '../components/RegistrationForm';

import { registrationUserThunk } from '../thunks/auth';

interface History {
  push: (path: string) => void;
}

interface RegistrationContainerProps {
  registrationUser: (email: string, password: string, cb: () => void) => void;
  history: History;
}

interface RegistrationContainerState {
  email: string;
  password: string;
}

class RegistrationContainerComponent extends React.Component
<RegistrationContainerProps, RegistrationContainerState> {
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

  onSignupClick = () => {
    this.props.registrationUser(this.state.email, this.state.password, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <RegistrationForm
        email={email}
        password={password}
        onInputChange={this.onInputChange}
        onSignupClick={this.onSignupClick}
      />
    );
  }
}

export const RegistrationContainer = connect(null, {
  registrationUser: registrationUserThunk,
})(RegistrationContainerComponent);
