import React, { Component } from 'react';
import Hero from '../assets/images/hero.png';


class homepage extends Component {
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
      <div>
        <img src={Hero} style={styles.backgroundImage} />
        <h2 style={styles.text}>Intro Statement</h2>
        <button style={styles.button} type="button" className="btn btn-outline-info" >Join Us</button>
      </div>
    );
  }
}

export default homepage;
