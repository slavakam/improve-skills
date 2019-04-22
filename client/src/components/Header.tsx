import * as React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onLogoutClick: () => void;
  isAuthenticated: boolean;
}

export const Header: React.SFC<HeaderProps> = ({ onLogoutClick, isAuthenticated }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Collapse className="justify-content-end">
        {
          isAuthenticated
            ? <Nav.Link onClick={onLogoutClick}>Sign out</Nav.Link>
            : (
              <>
                <Link to="/login" className="link">Log in</Link>
                <Link to="/signup" className="link">Sign Up</Link>
              </>
            )
        }
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};
