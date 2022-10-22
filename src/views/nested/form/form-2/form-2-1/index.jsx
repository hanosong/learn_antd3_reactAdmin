import React, { Component } from "react";
import { Input, ToolTip, Form, Row, Col, Button } from "antd";
// 多个表单
class Menu1_2_1 extends Component {
  state = {
    contacts: [],
  };

  renderList = () => {
    let _contacts = [];
    for (let i = 0; i < 10; i++) {
      _contacts.push({ name: "", mobile: "" });
    }
    this.setState({
      contacts: _contacts,
    });
  };

  // onChange = (index, name, event) => {
  //   let tempArray = JSON.parse(JSON.stringify(this.state.contacts));
  //   if ("name" === name)
  //     tempArray[index] = { ...tempArray[index], name: event.target.value };
  //   else tempArray[index] = { ...tempArray[index], mobile: event.target.value };
  //   return this.setState({
  //     contacts: tempArray,
  //   });
  // };

  submit = () => {
    const { getFieldsValue } = this.props.form;
    console.log(getFieldsValue(), "1111");
  };
  componentDidMount() {
    this.renderList();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        {this.state.contacts.map((item, index) => (
          <Row key={index}>
            <Col span={10}>
              <Form.Item label="name1111111">
                {getFieldDecorator(`${index}["name"]`)(
                  <Input
                  // onChange={(event) => this.onChange(index, "name", event)}
                  />
                )}
                {/* <Input /> */}
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="mobile">
                {getFieldDecorator(`${index}[mobile]`)(
                  <Input
                  // onChange={(event) => this.onChange(index, "mobile", event)}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        ))}
        <Button onClick={this.submit}>提交</Button>
      </Form>
    );
  }
}
const CustomizedForm = Form.create({})(Menu1_2_1);
export default CustomizedForm;
