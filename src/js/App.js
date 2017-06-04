import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import Content from './config/content';
import EventFiles from './config/eventsFile.js';
import Events from './components/Events.js';
import './../css/style.css';


class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <Homepage id="homepage .col-sm-12" Content={Content}/>
        </div>
        <div className="row">
          <Events id="events" Content={Content} EventFiles={EventFiles}/>
        </div>

      </div>
    );
  }
}

export default App;
