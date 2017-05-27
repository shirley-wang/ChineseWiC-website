import React, { Component } from 'react';
import Hero from '../assets/images/hero.png';


class event extends Component {
  render() {
    const styles = {
        backgroundImage: {
            flex: 1,
            width: null,
            height: '100vh',
            resizeMode: 'cover',
            position: 'relative'
        },
        text: {
          position: 'absolute',
          top: '50%',
          left: '30%',
          color: 'white',
          transform: 'translateY(-50%)'
        },

        button: {
          position: 'absolute',
          top: '60%',
          left: '34%',
          color: 'white',
          transform: 'translateY(-50%)'
      }

    };
    return (
      <div className="row">
          <div className="col-md-3">
            <img src="" alt="" className="img-thumbnail" style={{border: '1px solid #021a40'}}/>
          </div>
          <div className="col-md-3">
            <h1>Grace Hopper Celebration of Women in Computing</h1>
            <br/>
            <p>10/4/17 - 10/6/17</p>
            <br/>
            <p>Orlando, FL</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus turpis. Sed porttitor, </p>
            <br/>
            <button type="button" className="btn btn-outline-info" >RSVP here</button>
          </div>
          <div className="col-md-3">
            <img src="" alt="" className="img-thumbnail"/>
          </div>
          <div className="col-md-3">
            <h1>Title</h1>
            <br/>
            <p>Date</p>
            <br/>
            <p>Location</p>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis lectus turpis. Sed porttitor, </p>
            <br/>
            <button type="button" className="btn btn-outline-info" >RSVP here</button>
          </div>


      </div>
    );
  }
}

export default event;
