import React, { Component } from 'react';
import Teammate from './Teammate.js';
class Team extends Component {
  render() {
    return (
      <div className="TeamDiv middleDiv row">
      {
        this.props.TeammateInfo.map((teammateData) => {
         return <Teammate teammateData={teammateData} />
        })
      }
      </div>
    );
  }
}

export default Team;
