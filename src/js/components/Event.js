import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Thumbnail from './../../assets/images/rectangleImg.png';
class Event extends Component {
  render() {
    return (
      <div className="eventDiv row">
        <div className="eventImage eventContent col-xs-12 col-sm-2 col-sm-offset-1">
          <img src={Thumbnail} alt="image goes here"/>
        </div>
        <div className="eventInfo eventContent col-xs-12 col-sm-6">
          <h5>{this.props.eventData.date} @ {this.props.eventData.location}</h5>
          <h3>{this.props.eventData.title}</h3>
          <h5>{this.props.eventData.description}</h5>
        </div>
        <div className="eventButton eventContent col-xs-12 col-sm-2">
          <button type="button">{this.props.Content.RSVP}</button>
        </div>
      </div>
    );
  }
}

export default Event;
