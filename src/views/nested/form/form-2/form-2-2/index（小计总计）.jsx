import React, { Component } from "react";
import { Input, Form, Row, Col, Button } from "antd";

class Menu1_2_2 extends Component {
  state = {
    contacts: [{ name: "", mobile: "", uuid: Math.random() }],
    total: 0,
    flag: "",
    budgetTotal: "", //总计
  };

  onChange = (index, name, event) => {
    let _contacts = JSON.parse(JSON.stringify(this.state.contacts));
    if ("name" === name)
      _contacts[index] = { ..._contacts[index], name: event.target.value };
    else _contacts[index] = { ..._contacts[index], mobile: event.target.value };
    return this.setState({
      contacts: _contacts,
    });
  };

  // 小计
  totalCount = (currentIndex, target) => {
    const { getFieldsValue } = this.props.form;
    const { myphone } = getFieldsValue();
    let _total = 0;
    this.setState({ flag: currentIndex });
    if (currentIndex === 0) {
      if (myphone[0]["mobile"] == undefined) {
        _total = 0;
        return;
      } else {
        _total = myphone[0]["mobile"];
        this.setState({
          total: _total,
        });
        return;
      }
    }
    for (let i = 0; i < currentIndex + 1; i++) {
      _total += myphone[i]["mobile"] * 1;
    }
    this.setState({
      total: _total,
    });

    return;
  };

  // 总计
  getAllCount = () => {
    const { getFieldsValue } = this.props.form;
    const { myphone } = getFieldsValue();
    let _budgetTotal = 0;
    myphone.forEach((eachRow) => {
      _budgetTotal += eachRow["mobile"] * 1;
    });
    this.setState({
      budgetTotal: _budgetTotal || "",
    });
  };
  // 增加
  addContacts = () => {
    let _contacts = [...this.state.contacts];
    _contacts.push({ name: "", mobile: "", uuid: Math.random() });
    this.setState({
      contacts: _contacts,
    });
  };

  //提交
  submit = () => {
    const { getFieldsValue } = this.props.form;
    const { myphone } = getFieldsValue();
    // let _contacts = JSON.parse(JSON.stringify(myphone));
    let _contacts = this.copy(myphone);
    this.setState(
      {
        contacts: _contacts,
      },
      () => {
        console.log(myphone);
        console.log(this.state.contacts, 1);
      }
    );
    /*
      返回以下结构
      {
      myphone[0]:{
        name:'xxx',
        //或者其他fields
      }
  

    
    // const { myphone } = getFieldsValue(); //  拿到一个数组 => [{mobile,name}]

    /*
      ...
      调接口
    */
  };
  // 深拷贝
  copy = (obj) => {
    let newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== "object") {
      return;
    }
    for (let i in obj) {
      newobj[i] = typeof obj[i] === "object" ? this.copy(obj[i]) : obj[i];
    }
    return newobj;
  };

  componentDidMount() {}
  render() {
    const { getFieldDecorator } = this.props.form;
    const { flag } = this.state;
    return (
      <Form>
        <p>我是动态表单哦</p>
        {this.state.contacts.map((item, index) => (
          <Row key={item.uuid}>
            <Col span={6}>
              <Form.Item label={item.uuid}>
                {getFieldDecorator(`myphone[${index}].name`)(
                  <Input
                    onChange={(event) => this.onChange(index, "name", event)}
                  />
                )}
                {/* <Input /> */}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="mobile">
                {getFieldDecorator(`myphone[${index}].mobile`)(
                  <Input
                    onChange={(event) => this.onChange(index, "mobile", event)}
                  />
                )}
              </Form.Item>
            </Col>
            <Col span={3} offset={1}>
              <Form.Item label={`myphone[${index}].mobile`}>
                <Button
                  type="primary"
                  onClick={() => this.totalCount(index, item.uuid)}
                >
                  小计
                </Button>
              </Form.Item>
            </Col>
            <div
              style={
                flag === index ? { display: "block" } : { display: "none" }
              }
            >
              {this.state.total}
            </div>
          </Row>
        ))}
        <Row>
          <Col
            span={8}
            push={10}
            style={{
              marginLeft: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button onClick={this.getAllCount}>总计</Button>
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              {this.state.budgetTotal}
            </div>
          </Col>
        </Row>

        <Button onClick={this.addContacts}>增加</Button>
        <Button onClick={this.submit}>提交</Button>
      </Form>
    );
  }
}
const CustomizedForm = Form.create({})(Menu1_2_2);
export default CustomizedForm;
