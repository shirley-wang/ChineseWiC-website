import React, { Component } from 'react';
import { Row, Form, Button } from 'antd';
import styled from 'styled-components';

const FromDiv = styled.div`
  background-color: #550a95;
  text-align: center;
`;

const TitleDiv = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 40px;
  padding-top: 58px;
`
const FooterDiv = styled.div`
  background-color: #550a95;
  text-align: center;
  padding-top:24px;
  padding-bottom: 26px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

export default class Feedback extends Component {
  handleSubmit = (e) => {
    window.open("https://tinyletter.com/chinesewic");
  }

  render() {
    return (
      <FromDiv>
        <Row>
          <TitleDiv>{this.props.Content.dont_miss_update_from_us}</TitleDiv>
        </Row>
        <Button
          style={{ width: '30%', backgroundColor: '#f7d77d', color: 'black' }}
          type="primary"
          onClick={this.handleSubmit}
        >
          Subscribe
            </Button>
        <FooterDiv>
          <a href="#">Privacy Policy</a><p></p>
          © 2018 CWiC
        </FooterDiv>
      </FromDiv>
    );
  }
}
