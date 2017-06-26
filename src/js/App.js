import React, { Component } from 'react';
import Navigation from './components/Navigation.js';
import Homepage from './components/Homepage.js';
import Content from './config/content';
import EventFiles from './config/eventsFile.js';
import Events from './components/Events.js';
import About from './components/About.js';
import Feedback from './components/Feedback.js';
import TeammateInfo from './config/teammateInfo.js';
import Login from './components/Login.js';
import './../css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Navigation />
        </div>
        <div className="row">
          <Homepage Content={Content}/>
        </div>
        <div className="row spaceDiv"></div>
        <div className="row container-fluid">
          <Events Content={Content} EventFiles={EventFiles}/>
        </div>
        <div className="row container-fluid">
          <About TeammateInfo={TeammateInfo} Content={Content}/>
        </div>
        <div className="row spaceDiv"></div>
        <div className="row container-fluid">
          <Feedback Content={Content}/>
        </div>
      </div>
    );
  }
}

export default App;
