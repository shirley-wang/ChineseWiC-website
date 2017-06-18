import React, { Component } from 'react';
import Event from './Event.js';

class Events extends Component {
  render() {
    return (
      <div className="container">
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className="active"><a href="#events">Coming event</a></li>
          <li role="presentation"><a href="#events">Past event</a></li>
        </ul>
        {/*<div className="eventRow" id="events">
        {
          this.props.EventFiles.map((eventData) => {
           return <Event eventData={eventData} />
          })
        }
        </div>*/}
        <div id="carousel-event" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-event" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-event" data-slide-to="1"></li>
            <li data-target="#carousel-event" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="eventRow" id="events">
              {
                this.props.EventFiles.map((eventData) => {return <Event eventData={eventData}/>})
              }
              </div>
            </div>
            <div className="item">
              <div className="eventRow" id="events">
              {
                this.props.EventFiles.map((eventData) => {return <Event eventData={eventData}/>})
              }
              </div>
            </div>
          </div>

          <a className="left carousel-control" href="#carousel-event" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-event" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Events;
