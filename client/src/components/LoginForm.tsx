import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as PropTypes from 'prop-types';

interface LoginFormProps {
  email: string;
  password: string;
  onInputChange: (e: React.ChangeEvent) => void;
}

export const LoginForm: React.SFC<LoginFormProps> = ({
  email,
  password,
  onInputChange,
}) => {
  return (
    <Form className="login-form">
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

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
