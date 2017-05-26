import React, { Component } from 'react';
import Navbar from './navbar.js';
import Homepage from '../assets/sunset.jpeg';
import Events from './events.js';
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />

        <div className="container-fluid" id="home">
          <img src={Homepage} style={{height: '100vh'}}/>
        </div>
        <div className="container-fluid" id="events">
          <Events />
        </div>
        <footer id="contact" className="row-footer">
        </footer>
      </div>
    );
  }
}

export default App;
