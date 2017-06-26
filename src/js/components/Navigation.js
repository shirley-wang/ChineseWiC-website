import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Logo / Name</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <li role="presentation"><a href="#home">Home</a></li>
            <li role="presentation"><a href="#events">Events</a></li>
            <li role="presentation"><a href="#about">About</a></li>
            <li role="presentation"><a href="#ghc">GHC</a></li>
            <li role="presentation"><a href="#ghc">Signin</a></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
