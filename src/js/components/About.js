import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import Team from './Team.js';
class About extends Component {
  render() {
    return (
      <div className="aboutDiv" id="about">
        <div className="row spaceDiv"></div>
        <div className="row middleDiv">
          <Col md={10} lg={10} mdOffset={1} lgOffSet={1}>
            <h4>{this.props.Content.meet_us}</h4>
          </Col>
        </div>
        <div className="row spaceDiv"></div>

        <div className="row">
          <Col md={8} lg={8} mdOffset={2} lgOffSet={2}>
            <Team TeammateInfo={this.props.TeammateInfo}/>
          </Col>
        </div>
      
      </div>
    );
  }
}

export default About;
