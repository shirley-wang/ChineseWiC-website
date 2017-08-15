import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

class Navigation extends Component {
  constructor() {
    super();
    this._bind("handleClick");
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleClick() {
    this.props.handleSignUp();
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Logo / Name</a>
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
            <button className="joinBtn" onClick={this.handleClick}>Join</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default Navigation;
