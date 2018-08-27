import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FromDiv = styled.div`
  background-color: #550a95;
  height: 260px;
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
`

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
        <TitleDiv>{this.props.Content.dont_miss_update_from_us}</TitleDiv>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={emailError ? 'error' : ''}
            help={emailError || ''}
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
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
      </FromDiv>
    );
  }
}

const Feedback = Form.create({})(FeedbackForm);

export default Feedback;
