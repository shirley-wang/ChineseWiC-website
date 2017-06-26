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
      newEventDiv = <div className="row">
      {
        this.props.EventFiles.map((eventData) => {
         return <Event eventData={eventData} Content={this.props.Content}/>
        })
      }
      </div>;
    }
    if(!this.state.showNewEvents) {
      pastEventDiv = <div>This is past event</div>
    }
    return (
      <div className="eventsDiv" id="events">
        <Nav bsStyle="tabs" justified activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="#events">Coming events</NavItem>
          <NavItem eventKey={2} href="#events">Past events</NavItem>
        </Nav>
        <div className="spaceDiv"></div>
        {newEventDiv}
        {pastEventDiv}
        <div className="spaceDiv"></div>
      </div>
    );
  }
}

export default Events;
