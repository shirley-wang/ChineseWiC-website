import * as React from 'react';
import Event from './Event.js';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const NavMenu = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: center;
  color: #212121;
  border-bottom: ${props => props.active ? '4px solid #550a95' : ''};
`;

const PaddingDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top:50px;
`;

const FormDiv = styled.div`
  padding-top: 60px;
  padding-bottom: 65px;
  background-color: #f6f6f6;
  overflow: auto;
`;

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNewEvents: true, showPastEvents: false };
    this._bind("handleUpcomingClick", "handlePastClick");
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleUpcomingClick() {
    this.setState({ showNewEvents: true, showPastEvents: false });
  }

  handlePastClick() {
    this.setState({ showNewEvents: false, showPastEvents: true });
  }

  render() {
    let newEventDiv,
      pastEventDiv;
    if (this.state.showNewEvents) {
      newEventDiv = <PaddingDiv>
        {
          this.props.EventFiles.map((eventData) => {
            return <Event eventData={eventData} Content={this.props.Content} />
          })
        }
      </PaddingDiv>;
    }
    if (this.state.showPastEvents) {
      pastEventDiv = <PaddingDiv>
      {
        this.props.PastEventFiles.map((eventData) => {
          return <Event eventData={eventData} Content={this.props.Content} />
        })
      }
    </PaddingDiv>;
    }
    return (
      <FormDiv>
        <Row>
          <Col xs={{ span: 9, offset: 2 }} sm={{ span: 9, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} xl={{ span: 9, offset: 2 }}>
            <NavMenu active={this.state.showNewEvents} id="upcomingBtn" onClick={this.handleUpcomingClick}>{this.props.Content.upcoming_events}</NavMenu>
          </Col>
          <Col xs={{ span: 9, offset: 2 }} sm={{ span: 9, offset: 2 }} md={{ span: 9, offset: 2 }} lg={{ span: 9, offset: 2 }} xl={{ span: 9, offset: 2 }}>
            <NavMenu active={this.state.showPastEvents} id="pastBtn" onClick={this.handlePastClick}>{this.props.Content.past_events}</NavMenu>
          </Col>
        </Row>
        {newEventDiv}
        {pastEventDiv}
      </FormDiv>
    );
  }
}

export default Events;
