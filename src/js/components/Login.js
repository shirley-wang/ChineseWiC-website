import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Thumbnail from './../../assets/images/rectangleImg.png';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {showModal: this.props.show};
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    this.setState({showModal: false});
  }
  render() {
    return (
      <div className="static-modal" >
        <Modal.Dialog show={this.state.showModal} onHide={this.onClose()}>
          <Modal.Header>
            <Modal.Title>Signup</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
  }
}

export default Login;
