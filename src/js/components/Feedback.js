import * as React from 'react';
import { Row, Button, Icon } from 'antd';
import styled from 'styled-components';
import { Tooltip } from 'antd';

const FromDiv = styled.div`
  background-color: #550a95;
  display: flex;
  flex-direction: column;
`;

const TitleDiv = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.7px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 40px;
  padding-top: 58px;
`
const FooterDiv = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #550a95;
  padding-top:24px;
  padding-bottom: 26px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
`;

const PrivacyLink = styled.a`
  color: #ffffff;
`;

const SocialLink = styled.div`
  color: #ffffff;
`;

const CopyRight = styled.p`
  color: #ffffff;
`;

export default class Feedback extends React.Component {
  handleSubmit = (e) => {
    window.open("https://tinyletter.com/chinesewic");
  }
  facebookLink = () => {
    window.open("https://www.facebook.com/groups/abi.chinesewic");
  }
  wechatLink = () => {
    window.open("https://mp.weixin.qq.com/s/i3i2RYuC_XeeJDY0eWiJBQ");
  }
  render() {
    return (
      <FromDiv>
        <Row>
          <TitleDiv>{this.props.Content.dont_miss_update_from_us}</TitleDiv>
        </Row>
        <Button
          style={{ width: '30%', backgroundColor: '#f7d77d', color: 'black', margin: 'auto' }}
          type="primary"
          onClick={this.handleSubmit}
        >
          Subscribe
            </Button>
        <FooterDiv>
          <CopyRight>© 2018 CWiC</CopyRight>
          <PrivacyLink onClick={() => this.props.showPrivacy(true)}>Privacy Policy</PrivacyLink>
          <SocialLink>
            <Icon style={{ fontSize: '26px', cursor: 'pointer', paddingRight: '10px' }} type="facebook" theme="outlined" onClick={this.facebookLink} />
            <Tooltip title={"ChineseWiC"}>
              <Icon style={{ fontSize: '26px', cursor: 'pointer' }} type="wechat" theme="outlined" onClick={this.wechatLink}/>
            </Tooltip>
          </SocialLink>
        </FooterDiv>
      </FromDiv>
    );
  }
}
