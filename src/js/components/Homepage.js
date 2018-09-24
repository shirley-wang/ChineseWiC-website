import * as React from 'react';
import styled from 'styled-components';

const Background = require('./../../assets/images/home.jpg');

const HomeDiv = styled.div`
  height: 60vh;
`;

const HomeImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  filter: blur(2px);
`;

const WelcomeDiv = styled.div`
  font-family: Open Sans;
  font-size: 24px;
  font-weight: 500;
  padding-top: 20vh;
  letter-spacing: 0.9px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 20px;
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
  padding-top: 1vh;
  padding-bottom: 1vh;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
  padding-left: 25%;
  padding-right: 25%;
  width: 100vw;
`;

const UpdateLink = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: solid 2px #ffffff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.6px;
  color: #ffffff;
  background: none;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  &:hover {
    background: #f7d77d;
  }
  `;

class Homepage extends React.Component {
  OpenUpdateLink = () => {
    window.open('https://tinyletter.com/chinesewic');
  }

  render() {
    return (
      <HomeDiv>
        <HomeImg src={Background} />
        <WelcomeDiv>{this.props.Content.welcome}</WelcomeDiv>
        <CwicDiv>{this.props.Content.cwic}</CwicDiv>
        <MissionDiv>{this.props.Content.mission_statement}</MissionDiv>
        <UpdateLink onClick={this.OpenUpdateLink}>{this.props.Content.get_updated}</UpdateLink>

      </HomeDiv>
    );
  }
}

export default Homepage;
