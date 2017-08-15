import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Thumbnail from './../../assets/images/rectangleImg.png';
class Event extends Component {
  render() {
    return (
      <div className="eventDiv">
      <Row md={12} lg={12} sm={12}>
          <Col md={2} sm={2} mdOffset={1} smOffset={1}><img src={Thumbnail} alt="image goes here" className="eventImage"/></Col>
          <Col md={6} sm={6} className="eventInfo">
            <h5>{this.props.eventData.date} @ {this.props.eventData.location}</h5>
            <h3>{this.props.eventData.title}</h3>
            <h5>{this.props.eventData.description}</h5>
          </Col>
          <Col md={2} sm={2} className="EventButton">
            <button type="button">{this.props.Content.RSVP}</button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Event;
