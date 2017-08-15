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
  constructor() {
    super();
    this._bind("handleSignUp");
    this.state = {
      showSignUp: false
    };
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  handleSignUp() {
    console.log("join is clickd");
    this.setState({showSignUp: true});
  }

  render() {
    let loginDiv;
    if (this.state.showSignUp) {
      loginDiv = <Login show={true}/>
    }
    return (
      <div className="App container-fluid">
        <div className="row">
          <Navigation handleSignUp={this.handleSignUp}/>
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
        <div className="row container-fluid feedbackDiv">
          <Feedback Content={Content}/>
        </div>
        {loginDiv}
      </div>
    );
  }
}

export default App;
