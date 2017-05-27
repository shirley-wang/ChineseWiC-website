import React, { Component } from 'react';
import Event from './event.js';
class events extends Component {
  render() {
    return (
      <div className="container-fluid" style={{height: '100vh'}}>
        <div className="row">
        <ul className="nav nav-tabs nav-justified" id="events">
          <li role="presentation" className="active"><a href="#events">Upcoming events</a></li>
          <li role="presentation"><a href="#events">Past events</a></li>
        </ul>
        </div>
        <div className="row">
          <Event/>
        </div>

      </div>
    );
  }
};
export default events;
