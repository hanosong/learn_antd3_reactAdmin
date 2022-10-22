import React, { Component } from "react";
import { Input, Form } from "antd";
import AmtFormInput from "./amtFormInput.js";
//基础表单
class Demo extends Component {
  onChange = (e) => {
    console.log(e.target, 22);
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form>
          <Form.Item label="你好啊!">
            {getFieldDecorator(`txtInput`)(
              <AmtFormInput onChange={this.onChange} />
            )}
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const CustomizedForm = Form.create({})(Demo);
export default CustomizedForm;
