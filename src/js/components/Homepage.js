import React, { Component } from 'react';
import styled from 'styled-components';

const WelcomeDiv = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  text-align: center;
  color: #ffffff;
  width: 100vw;
`;

const CwicDiv = styled.div`
  font-family: Open Sans;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 1.1px;
  color: #f7d77d;
  width: 100vw;
  text-align: center;
`;

const MissionDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
  padding-left: 25%;
  padding-right: 25%;
  width: 100vw;
  text-align: center;
`;

const HomeDiv = styled.div`
  background-color: black;
`;

const UpdateLink = styled.a`
  width: 50vw;
  height: 50px;
  border-radius: 5px;
  border: solid 2px #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.6px;
  text-align: center;
  color: #ffffff;
  background: none;
`;

class Homepage extends Component {
  render() {
    return (
      <HomeDiv>
        <WelcomeDiv>{this.props.Content.welcome}</WelcomeDiv>
        <CwicDiv>{this.props.Content.cwic}</CwicDiv>
        <MissionDiv>{this.props.Content.mission_statement}</MissionDiv>
        <div style={{textAlign: 'center'}}>
          <UpdateLink target='_blank' href='https://tinyletter.com/chinesewic'>Get updates</UpdateLink>

        </div>
      </HomeDiv>
    );
  }
}

export default Homepage;
