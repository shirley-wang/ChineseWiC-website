import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Thumbnail from './../../assets/images/rectangleImg.png';
class Event extends Component {
  render() {
    return (
      <Col md={6} lg={6}>
        <Row>
          <Col md={4} mdOffset={1}><img src={Thumbnail} alt="image goes here" className="img-thumbnail eventImage"/></Col>
          <Col md={7}>
            <h3>{this.props.eventData.title}</h3>
            <h5>{this.props.eventData.date}</h5>
            <address>
              {this.props.eventData.location}
            </address>
            <h4>{this.props.eventData.description}</h4>
            <Button>{this.props.Content.RSVP}</Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Event;
