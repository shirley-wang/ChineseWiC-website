import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Row, Button } from 'react-bootstrap';

class Feedback extends Component {
  render() {
    return (
      <div className="middleDiv">
        <h3>{this.props.Content.feedback}</h3>
        <Form>
          <Row>
            <Col md={3} mdOffset={1}>
              <FormGroup>
                <FormControl type="text" placeholder="NAME *" />
              </FormGroup>
            </Col>
            <Col md={7}>
              <FormGroup>
                <FormControl type="text" placeholder="EMAIL *" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={10} mdOffset={1}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl rows="5" componentClass="textarea" placeholder="YOUR FEEDBACK *" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="middleDiv">
              <button className="sendBtn">Send</button>
            </div>
          </Row>
        </Form>
        <div className="row spaceDiv"></div>
      </div>
    );
  }
}

export default Feedback;
