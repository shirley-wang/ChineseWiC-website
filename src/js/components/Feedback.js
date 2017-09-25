import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Row } from 'react-bootstrap';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "", email: "", feedback:"", isSubmitted:false};
    this._bind("handleNameChange", "handleEmailChange", "handleFeedbackChange", "handleSendFeedback");
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleNameChange() {

  }

  handleEmailChange() {

  }

  handleFeedbackChange() {

  }

  handleSendFeedback() {
    this.setState({isSubmitted: true});
    setTimeout(function(){
         this.setState({isSubmitted:false});
    }.bind(this),5000);
  }

  renderFeedbackForm() {
    if (!this.state.isSubmitted) {
      return (
        <div>
        <h3>{this.props.Content.feedback}</h3>
        <Form>
          <Row>
            <Col md={3} mdOffset={1}>
              <FormGroup>
                <FormControl type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="NAME *" />
              </FormGroup>
            </Col>
            <Col md={7}>
              <FormGroup>
                <FormControl type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="EMAIL *" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={10} mdOffset={1}>
              <FormGroup controlId="formControlsTextarea">
                <FormControl rows="5" componentClass="textarea" value={this.state.feedback} onChange={this.handleFeedbackChange} placeholder="YOUR FEEDBACK *" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <div className="middleDiv">
              <button className="sendBtn" onClick={this.handleSendFeedback}>Send</button>
            </div>
          </Row>
        </Form>
        </div>
      );
    }
  }

  renderPostFeedback() {
    if (this.state.isSubmitted) {
      return (
        <div>
          <h1>{this.props.Content.thanks_for_the_feedback}</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="middleDiv">
        {this.renderFeedbackForm()}
        {this.renderPostFeedback()}
        <div className="row spaceDiv"></div>
      </div>
    );
  }
}

export default Feedback;
