import React, { Component } from 'react';
import { Row, Menu } from 'antd';
import LogoSVG from '../../assets/images/logo.svg'
import styled from 'styled-components';

const Logo = styled.div`
  width: 67px;
  height: 20px;
  float: left;
  background-image:url(${LogoSVG});
  background-repeat: no-repeat;
  margin: 16px 10px 17px 25px;
  cursor: pointer;
`;

class Navigation extends Component {
  render() {
    return (
      <Row>
        <Logo onClick={() => this.props.showPrivacy(false)} />
        {
          !this.props.privacyPage ? <div><Menu
            mode="horizontal"
          >
            <Menu.Item key="events">
              <a href="#events">EVENTS</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="#about">ABOUT</a>
            </Menu.Item>
          </Menu></div> : null
        }

      </Row>
    );
  }
}

export default Navigation;
