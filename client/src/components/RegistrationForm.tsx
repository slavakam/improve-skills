import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

interface RegistrationFormProps {
  email: string;
  password: string;
  onInputChange: (e: React.ChangeEvent) => void;
  onSignupClick: () => void;
}

export const RegistrationForm: React.SFC<RegistrationFormProps> = ({
  email,
  password,
  onInputChange,
  onSignupClick,
}) => {
  return (
    <Form className="registration-form">
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={onInputChange}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={onSignupClick}
      >
        Sign Up
      </Button>
    </Form>
  );
};

RegistrationForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSignupClick: PropTypes.func.isRequired,
};
