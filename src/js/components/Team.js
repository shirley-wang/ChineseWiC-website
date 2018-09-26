import * as React from 'react';
import Teammate from './Teammate.js';
import styled from 'styled-components';
import { Row, List } from 'antd';
import TeammateInfo from './../config/teammateInfo';

const FormDiv = styled(List)`
  text-align: center;
`;

const listData = TeammateInfo;

class Team extends React.Component {
  render() {
    return (
      <FormDiv
        itemLayout="horizontal"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.name}
          >
            <Row>
              <Teammate teammateData={item} />
            </Row>
          </List.Item>
        )}
      />
    );
  }
}

export default Team;
