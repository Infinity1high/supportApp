import React from 'react';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar color="dark" dark>
        <Nav navbar>
          <NavItem>
            <Link to="registration"><i className="fa fa-user" /></Link>
            <Link to="/"><i className="fa fa-phone" /></Link>
            <Link to="calls"><i className="fa fa-list" /></Link>
            <Link to="registration"><i className="fa fa-sign-in" /></Link>
          </NavItem>
        </Nav>
      </Navbar>
      {children}
    </div>
  );
}

export default Layout;
