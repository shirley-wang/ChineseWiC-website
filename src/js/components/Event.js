import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Thumbnail from './../../assets/images/rectangleImg.png';

const DateDiv = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: #212121;
`;

const EventNameDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: #212121;
`;

const DecriptionDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.07;
  letter-spacing: 0.5px;
  color: #858585;
`;

const RSVPDiv = styled.a`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  text-align: center;
  color: #550a95;
`;

class Event extends Component {
  render() {
    return (
      <Col xs={{span: 22, offset: 2}} sm={{span: 22, offset: 2}} md={{span: 22, offset: 2}} lg={{span: 6, offset: 2}} xl={{span: 6, offset: 2}}>
        <Row>
          <img src={Thumbnail} alt="image goes here" />
        </Row>
        <Row>
          <DateDiv>{this.props.eventData.date} @ {this.props.eventData.location}</DateDiv>
        </Row>
        <Row>
          <EventNameDiv>{this.props.eventData.title}</EventNameDiv>
        </Row>
        <Row>
          <DecriptionDiv>{this.props.eventData.description}</DecriptionDiv>
        </Row>
        <Row>
          <RSVPDiv href="">RSVP</RSVPDiv>
        </Row>
      </Col>
    );
  }
}

export default Event;
