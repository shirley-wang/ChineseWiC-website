import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Team from './Team.js';
class About extends Component {
  render() {
    return (
      <div className="aboutDiv" id="about">
      <div className="row">
        <Col md={8} lg={8} mdOffset={2} lgOffSet={2}>
          <Team TeammateInfo={this.props.TeammateInfo}/>
        </Col>
      </div>
        <div className="row spaceDiv">
        </div>
        <div className="row missionStatementDiv middleDiv">
          <Col md={10} lg={10} mdOffset={1} lgOffSet={1}>
            <h3 className="">{this.props.Content.mission_title}</h3><br/>
            <h4>{this.props.Content.mission_statement}</h4>
          </Col>
        </div>
      </div>
    );
  }
}

export default About;
