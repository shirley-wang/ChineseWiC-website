import * as React from 'react';
import { Col, Avatar} from 'antd'
import styled from 'styled-components';

const NameDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  text-align: center;
  color: #333333;
  padding-top: 20px;
`;

const DescriptionDiv = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  text-align: center;
  color: #787878;
  padding-bottom: 48px;
`;

class Teammate extends React.Component {
  render() {
    return (
      <Col xs={{span: 20, offset: 2}} sm={{span: 18, offset: 3}} md={{span: 18, offset: 3}} lg={{span: 16, offset: 4}} xl={{span: 12, offset: 6}}>
        <Avatar src={this.props.teammateData.img} shape="circle" size={140}/>
        <NameDiv>{this.props.teammateData.name}</NameDiv>
        <DescriptionDiv>{this.props.teammateData.description}</DescriptionDiv>
      </Col>
    );
  }
}

export default Teammate;
