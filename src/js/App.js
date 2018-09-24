import * as React from 'react';
import Navigation from './components/Navigation.js';
import Homepage from './components/Homepage.js';
import Content from './config/content';
import EventFiles from './config/eventsFile.js';
import PastEventFiles from './config/pastEvent';
import Events from './components/Events.js';
import About from './components/About.js';
import Feedback from './components/Feedback.js';
import TeammateInfo from './config/teammateInfo.js';
import './../css/style.css';
import { Row } from 'antd';
import "antd/dist/antd.css";
import Privacy from '../js/components/Privacy';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPrivacy: false
    }
    this.showPrivacy = this.showPrivacy.bind(this);
  }

  showPrivacy(value) {
    this.setState({ showPrivacy: value })
  }

  render() {
    const HomePage = <div><Homepage Content={Content} />
      <Row id="events">
        <Events Content={Content} EventFiles={EventFiles} PastEventFiles={PastEventFiles}/>
      </Row>
      <Row id="about">
        <About TeammateInfo={TeammateInfo} Content={Content} />
      </Row>
      <Row id="feedback">
        <Feedback Content={Content} showPrivacy={this.showPrivacy} />
      </Row></div>;
    return (
      <div className="App container-fluid">
        <Navigation showPrivacy={this.showPrivacy} privacyPage={this.state.showPrivacy}/>
        {
          this.state.showPrivacy ? <Privacy /> : HomePage
        }
      </div>
    );
  }
}

export default App;
