import React, { Component } from 'react';
import Navbar from './navbar.js';
import Events from './events.js';
import Homepage from './homepage.js';
class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Navbar />


        <div className="row" id="home">
          <Homepage/>
        </div>
        <div className="row" style={{padding:'30px'}} id="events">
        </div>
        <div className="row" >
          <Events />
        </div>
        <footer id="contact" className="row-footer">
        </footer>
      </div>
    );
  }
}

export default App;
