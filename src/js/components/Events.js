import React, { Component } from 'react';
import Event from './Event.js';
import { Nav, NavItem } from 'react-bootstrap';
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {showNewEvents: true, showPastEvents: false};
    this._bind("handleUpcomingClick", "handlePastClick");
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleUpcomingClick() {
    this.setState({showNewEvents: true, showPastEvents: false});
    document.getElementById("pastBtn").style.backgroundColor = "#f7d77d";
    document.getElementById("upcomingBtn").style.backgroundColor = "#fffae7";
  }

  handlePastClick() {
    this.setState({showNewEvents: false, showPastEvents: true});
    document.getElementById("upcomingBtn").style.backgroundColor = "#f7d77d";
    document.getElementById("pastBtn").style.backgroundColor = "#fffae7";

  }

  render() {
    let newEventDiv,
      pastEventDiv;
    if(this.state.showNewEvents) {
      newEventDiv = <div className="row eventsBackground">
      {
        this.props.EventFiles.map((eventData) => {
         return <Event eventData={eventData} Content={this.props.Content}/>
        })
      }
      </div>;
    }
    if(this.state.showPastEvents) {
      pastEventDiv = <div className="row eventsBackground">This is past event</div>
    }
    return (
      <div className="eventsDiv" id="events">
        <div className="row eventNav">
          <button className="eventNavBtn" id="upcomingBtn" onClick={this.handleUpcomingClick}>{this.props.Content.upcoming_events}</button>
          <button className="eventNavBtn" id="pastBtn" onClick={this.handlePastClick}>{this.props.Content.past_events}</button>
        </div>
        <div className="row spaceDiv eventsBackground"></div>
        {newEventDiv}
        {pastEventDiv}
        <div className="row spaceDiv eventsBackground"></div>
      </div>
    );
  }
}

export default Events;
