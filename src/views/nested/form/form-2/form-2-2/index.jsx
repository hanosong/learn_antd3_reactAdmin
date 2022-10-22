import React, { Component } from "react";
import { Input, Form, Row, Col, Button } from "antd";
import moment from "moment";
// 动态表单 增加修改删除
class Menu1_2_2 extends Component {
  state = {
    contacts: [{ name: "", mobile: "", uuid: moment().format("x") }],
  };

  // 记录用户输入
  onChange = (index, name, event) => {
    let _contacts = JSON.parse(JSON.stringify(this.state.contacts));
    if ("name" === name) _contacts[index].name = event.target.value;
    else _contacts[index].mobile = event.target.value;
    return this.setState({
      contacts: _contacts,
    });
  };

  // 点击删除
  del = (current) => {
    const { setFieldsValue, getFieldsValue } = this.props.form;
    const { myphone } = getFieldsValue();
    let _contacts = [...this.state.contacts];
    const newArr = _contacts.filter(
      (item, index) => item.uuid !== _contacts[current].uuid
    );

    // 更新源数组;
    this.setState(
      {
        contacts: newArr,
      },
      () => {
        // 数组对象的指针不能指向同一个
        let _newArr = this.deepCopy(newArr);
        // 更新视图显示 => 设置表单的值
        let $contacts = _newArr.map((item) => {
          for (let key in item) {
            if (key === "uuid") {
              delete item[key];
            }
            continue;
          }
          return item;
        });
        setFieldsValue({
          myphone: $contacts,
        });
      }
    );
  };

  // 增加
  addContacts = () => {
    let _contacts = [...this.state.contacts];
    _contacts.push({ name: "", mobile: "", uuid: moment().format("x") });
    this.setState({
      contacts: _contacts,
    });
  };

  //提交
  submit = () => {
    const { getFieldsValue } = this.props.form;
    const { name } = getFieldsValue;
    console.log(name, "用户输入");
    // console.log(this.state.contacts, "数据源");
  };

  // 深拷贝一份数据 => 用于删除后重新渲染
  deepCopy(obj) {
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== "object") {
      return;
    }
    for (let i in obj) {
      newobj[i] = typeof obj[i] === "object" ? this.deepCopy(obj[i]) : obj[i];
    }
    return newobj;
  }

  componentDidMount() {
    console.log(moment().format("x"), 1111);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        {this.state.contacts.map((item, index) => (
          <Row key={item.uuid}>
            <Col span={10}>
              {/*当使用`${index}['name']` */}
              <Form.Item label="name">
                {getFieldDecorator(`myphone[${index}].name`)(
                  <Input
                    onChange={(event) => this.onChange(index, "name", event)}
                  />
                )}
                {/* <Input /> */}
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item label="mobile">
                {getFieldDecorator(`myphone[${index}].mobile`)(
                  <Input
                    onChange={(event) => this.onChange(index, "mobile", event)}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={3} offset={1}>
              <Form.Item>
                <Button type="primary" onClick={() => this.del(index)}>
                  删除
                </Button>
              </Form.Item>
            </Col>
          </Row>
        ))}
        <Button onClick={this.addContacts}>增加</Button>
        <Button onClick={this.submit}>提交</Button>
      </Form>
    );
  }
}
const CustomizedForm = Form.create({})(Menu1_2_2);
export default CustomizedForm;
