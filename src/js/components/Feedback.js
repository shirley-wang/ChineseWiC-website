import React, { Component } from 'react';
import { Row, Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FromDiv = styled.div`
  background-color: #550a95;
  text-align: center;
`;

const TitleDiv = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  text-align: center;
  color: #ffffff;
  padding-bottom: 40px;
  padding-top: 58px;
`
const FooterDiv = styled.div`
  background-color: #550a95;
  text-align: center;
  padding-top:24px;
  padding-bottom: 26px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: 0.5px;
  color: #ffffff;
`;
class FeedbackForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    return (
      <FromDiv>
        <Row>
          <TitleDiv>{this.props.Content.dont_miss_update_from_us}</TitleDiv>
        </Row>
        <Row>


          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}>
              {getFieldDecorator('email', {
                rules: [{ type: 'email', required: true, message: 'Please enter a valid email' }],
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="EMAIL" />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Subscribe
            </Button>
            </FormItem>
          </Form>
        </Row>
        <FooterDiv>
          © 2018 CWiC
        </FooterDiv>
      </FromDiv>
    );
  }
}

const Feedback = Form.create({})(FeedbackForm);

export default Feedback;
