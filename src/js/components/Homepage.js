import React, { Component } from 'react';
import Hero from './../../assets/images/hero.png';
class Homepage extends Component {
  render() {
    return (
      <div className="bg">
        <img src={Hero} alt=""/>
        <div className="intro">{this.props.Content.intro_statement}</div>
      </div>
    );
  }
}

export default Homepage;
