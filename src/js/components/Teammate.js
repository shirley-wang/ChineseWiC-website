import React, { Component } from 'react';
import { Col, Avatar} from 'antd'
import styled from 'styled-components';

const NameDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #333333;
  padding-top: 20px;
`;

const DescriptionDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: center;
  color: #787878;
`;

class Teammate extends Component {
  render() {
    return (
      <Col xs={24} sm={24} md={{span: 9, offset: 2}} lg={{span: 9, offset: 2}} xl={{span: 9, offset: 2}}>
        <Avatar src={this.props.teammateData.img} shape="circle" size={140}/>
        <NameDiv>{this.props.teammateData.name}</NameDiv>
        <DescriptionDiv>{this.props.teammateData.description}</DescriptionDiv>
      </Col>
    );
  }
}

export default Teammate;
