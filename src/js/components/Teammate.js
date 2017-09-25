import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import Thumbnail from './../../assets/images/circleImg.png';
class Teammate extends Component {
  render() {
    return (
      <Col md={6} lg={6}>
      <div className="teammateDiv">
        <Image src={this.props.teammateData.img} alt="image goes here" className="teammateImg" circle/>
        <div className="teammateName">{this.props.teammateData.name}</div>
        <div className="teammateDescription">{this.props.teammateData.description}</div>
      </div>
      </Col>
    );
  }
}

export default Teammate;
