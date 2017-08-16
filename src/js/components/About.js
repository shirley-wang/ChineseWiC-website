import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Team from './Team.js';
class About extends Component {
  render() {
    return (
      <div className="aboutDiv" id="about">
        <div className="row spaceDiv"></div>
        <div className="row middleDiv">
          <h4>{this.props.Content.meet_us}</h4>
        </div>
        <div className="row spaceDiv"></div>
        <div className="row middleDiv">
            <Team TeammateInfo={this.props.TeammateInfo}/>
        </div>

      </div>
    );
  }
}

export default About;
