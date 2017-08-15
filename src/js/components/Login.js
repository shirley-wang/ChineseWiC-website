import React, { Component } from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Thumbnail from './../../assets/images/rectangleImg.png';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {show: this.props.show};
    this._bind("onClose");
  }
  componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.show
      });
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  onClose() {
    console.log("close is clicked");
    this.setState({show: false});
  }

  FieldGroup({ id, label, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
      </FormGroup>
    );
  }

  render() {
    return (
      <div className="static-modal" >
        <Modal show={this.state.show} onHide={this.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text" placeholder="your name" required/>
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email address</ControlLabel>
              <FormControl type="email" placeholder="Enter email" />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="" />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onClose}>Close</Button>
            <Button type="submit" className="btn-primary">Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;
