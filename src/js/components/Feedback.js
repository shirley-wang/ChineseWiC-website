import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

class Feedback extends Component {
  render() {
    return (
      <div className="middleDiv">
        <h3>{this.props.Content.feedback}</h3>
        <Col md={6} lg={6} mdOffset={3} lgOffSet={3}>
        <Form>
        <FormGroup>
          <FormControl type="text" placeholder="Name*" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Email*" />
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <FormControl componentClass="textarea" placeholder="Feedback content*" />
        </FormGroup>
        </Form>
        </Col>
      </div>
    );
  }
}

export default Feedback;
