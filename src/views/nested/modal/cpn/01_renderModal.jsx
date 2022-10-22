import React, { PureComponent } from "react";
import { Form, Input, Modal, Select } from "antd";
import Item from "antd/lib/list/Item";
// 模拟点击后调接口，弹出弹窗，渲染弹窗  / 类组件的写法
export class RenderModal extends PureComponent {
  state = {
    flag: this.props.flag,
  };
  componentWillReceiveProps(nextprops) {
    this.setState({
      flag: nextprops.flag,
    });
  }
  render() {
    const { flag } = this.state;
    console.log(flag, this.props.flag, 22);
    const { name, age } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* <Modal visible={flag} onCancel={!flag}>
          <Form>
            <Form.Item>
              {getFieldDecorator("date", {
                initialValue: name,
              })(<Input />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("name", {
                initialValue: age,
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
        <Select >
           <Option value={Item.value}>{Item.label}</Option>
        </Select> */}
      </div>
    );
  }
}
const RendermyModal = Form.create()(RenderModal);
export default RendermyModal;
