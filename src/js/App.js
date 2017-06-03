import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import './../css/style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }

  render() {
    return (
      <div className="App container-fluid homepage">
        <Navbar />
      </div>
    );
  }
}

export default App;
