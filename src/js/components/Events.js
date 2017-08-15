import React, { Component } from 'react';
import Event from './Event.js';
import { Nav, NavItem } from 'react-bootstrap';
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {showNewEvents: true, activeKey: 1};
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    const isNewEvent = selectedKey === 1;
    this.setState({showNewEvents: isNewEvent, activeKey: selectedKey});
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
    if(!this.state.showNewEvents) {
      pastEventDiv = <div className="row eventsBackground">This is past event</div>
    }
    return (
      <div className="eventsDiv" id="events">
        <Nav className="row tabs" bsStyle="tabs" justified activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem className="tabItem" eventKey={1} href="#events">Coming events</NavItem>
          <NavItem className="tabItem" eventKey={2} href="#events">Past events</NavItem>
        </Nav>
        <div className="row spaceDiv eventsBackground"></div>
        {newEventDiv}
        {pastEventDiv}
        <div className="row spaceDiv eventsBackground"></div>
      </div>
    );
  }
}

export default Events;
