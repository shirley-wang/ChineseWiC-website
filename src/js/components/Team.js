import React, { Component } from 'react';
import Teammate from './Teammate.js';
import styled from 'styled-components';
import {Row} from 'antd';
const FormDiv = styled.div`
  text-align: center;
`;

class Team extends Component {
  render() {
    return (
      <FormDiv>
        <Row className="TeamDiv middleDiv">
        {
          this.props.TeammateInfo.map((teammateData) => {
           return <Teammate teammateData={teammateData} />
          })
        }
        </Row>
      </FormDiv>
    );
  }
}

export default Team;
