import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="events">
          EVENTS
      </Menu.Item>
        <Menu.Item key="about">
          ABOUT
      </Menu.Item>
      </Menu>


    );
  }
}

export default Navigation;
