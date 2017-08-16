import React, { Component } from 'react';
import Teammate from './Teammate.js';
class Team extends Component {
  render() {
    return (
      <div>
        <div className="TeamDiv middleDiv">
        {
          this.props.TeammateInfo.map((teammateData) => {
           return <Teammate teammateData={teammateData} />
          })
        }
        </div>
      </div>
    );
  }
}

export default Team;
