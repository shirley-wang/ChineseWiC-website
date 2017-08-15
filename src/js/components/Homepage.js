import React, { Component } from 'react';
import Hero from './../../assets/images/hero.png';
class Homepage extends Component {
  render() {
    return (
      <div className="homepage" id="home">
        <img className="backgroundImg" src={Hero} alt=""/>
        <div className="welcome homepageContent">{this.props.Content.welcome}</div>
        <div className="cwic homepageContent">{this.props.Content.cwic}</div>
        <div className="mission homepageContent">{this.props.Content.mission_statement}</div>
      </div>
    );
  }
}

export default Homepage;
