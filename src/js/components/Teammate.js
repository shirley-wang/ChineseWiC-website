import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Thumbnail from './../../assets/images/circleImg.png';
class Teammate extends Component {
  render() {
    return (
      <Col md={6} lg={6}>
      <div className="teammateDiv">
        <Image src={Thumbnail} alt="image goes here" className="teammateImg" circle/>
        <h3>{this.props.teammateData.name}</h3>
        <h4>{this.props.teammateData.description}</h4>
      </div>
      </Col>
    );
  }
}

export default Teammate;
