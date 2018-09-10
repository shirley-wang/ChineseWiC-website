import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Homepage from './components/Homepage.js';
import Content from './config/content';
import EventFiles from './config/eventsFile.js';
import Events from './components/Events.js';
import About from './components/About.js';
import Feedback from './components/Feedback.js';
import TeammateInfo from './config/teammateInfo.js';
import './../css/style.css';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import styled from 'styled-components';


class App extends Component {
  constructor() {
    super();
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  render() {
    return (
      <div className="App container-fluid">
        <Navigation />
        <Row>
          <Homepage Content={Content} />
        </Row>
        <Row id="events">
          <Events Content={Content} EventFiles={EventFiles} />
        </Row>
        <Row id="about">
          <About TeammateInfo={TeammateInfo} Content={Content} />
        </Row>
        <Row id="feedback">
          <Feedback Content={Content} />
        </Row>
      </div>
    );
  }
}

export default App;
