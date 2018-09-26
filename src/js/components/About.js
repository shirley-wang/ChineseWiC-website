import * as React from 'react';
import Team from './Team.js';
import { Row } from 'antd';
import styled from 'styled-components';

const TitleDiv = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: center;
  color: #333333;
  padding-bottom: 65px;
`;

const FormDiv = styled.div`
  padding-top: 60px;
  overflow: auto;
`;

class About extends React.Component {
  render() {
    return (
      <FormDiv>
        <Row>
          <TitleDiv>{this.props.Content.meet_us}</TitleDiv>
        </Row>
        <Row>
          <Team TeammateInfo={this.props.TeammateInfo} />
        </Row>
      </FormDiv>
    );
  }
}

export default About;
