import * as React from 'react';
import styled from 'styled-components';

const DateDiv = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.4px;
  color: #212121;
  padding-bottom: 12px;
`;

const EventNameDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: #212121;
  padding-bottom: 12px;
`;

const DecriptionDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.07;
  letter-spacing: 0.5px;
  color: #858585;
`;

const RSVPDiv = styled.a`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-align: center;
  color: #550a95;
`;

const FormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 330px;
  height: 500px;
  margin: auto;
  padding:10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

const EmptyDiv = styled.div`
  width: 330px;
  margin: auto;
`;

const ImgDiv = styled.img`
  margin:auto;
  width: 100%;
`;

const ContentDiv = styled.div`
  width: 90%;
  margin:auto;
  align-self: center;
`;

class Event extends React.Component {
  render() {
    if (!this.props.eventData.date) {
      return <EmptyDiv></EmptyDiv>;
    }
    return (
      <FormDiv>
        <ImgDiv src={this.props.eventData.imgUrl} alt="image goes here" ></ImgDiv>
        <ContentDiv>
          <DateDiv>{this.props.eventData.date}{this.props.eventData.location}</DateDiv>
          <EventNameDiv>{this.props.eventData.title}</EventNameDiv>
          <DecriptionDiv>{this.props.eventData.description}</DecriptionDiv>
          <RSVPDiv href={this.props.eventData.url} target='_blank'>{this.props.eventData.rsvpLabel}</RSVPDiv>
        </ContentDiv>
      </FormDiv >
    );
  }
}

export default Event;
