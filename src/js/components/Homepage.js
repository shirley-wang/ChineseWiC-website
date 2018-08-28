import React, { Component } from 'react';
import Hero from './../../assets/images/hero.png';
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
`;
class Homepage extends Component {
  render() {
    return (
      <div className="homepage" id="home">
        <img className="backgroundImg" src={Hero} alt=""/>
        <WelcomeDiv className="welcome">{this.props.Content.welcome}</WelcomeDiv>
        <div className="cwic homepageContent">{this.props.Content.cwic}</div>
        <div className="mission homepageContent">{this.props.Content.mission_statement}</div>
      </div>
    );
  }
}

export default Homepage;
