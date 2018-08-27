import React, { Component } from 'react';
import { Col, Avatar} from 'antd'
import "antd/dist/antd.css";
class Teammate extends Component {
  render() {
    return (
      <Col md={6} lg={6}>
      <div className="teammateDiv">
        <Avatar src={this.props.teammateData.img} className="teammateImg" shape="circle" size="small"/>
        <div className="teammateName">{this.props.teammateData.name}</div>
        <div className="teammateDescription">{this.props.teammateData.description}</div>
      </div>
      </Col>
    );
  }
}

export default Teammate;
