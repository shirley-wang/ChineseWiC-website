import React, { Component } from 'react';
import Event from './Event.js';

class Events extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className="active"><a href="#events">Coming event</a></li>
          <li role="presentation"><a href="#events">Past event</a></li>
        </ul>
        <div className="row" id="events">
        {
          this.props.EventFiles.map((eventData) => {
           return <Event eventData={eventData} />
          })
        }
        </div>
      </div>
    );
  }
}

export default Events;
