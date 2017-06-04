import React, { Component } from 'react';
class Event extends Component {
  render() {
    return (
      <div className=".col-md-6 .col-lg-6">
       <h3>{this.props.eventData.title}</h3>
       <h5>{this.props.eventData.date}</h5>
       <h5>{this.props.eventData.location}</h5>
       <h4>{this.props.eventData.description}</h4>
      </div>
    );
  }
}

export default Event;
