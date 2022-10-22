import React, { Component } from "react";
import { Button, Modal, Table } from "antd";
export default class index extends Component {
  state = {
    modalFlag: false,
    columns: [
      {
        title: "序号",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => index + 1,
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
    ],
    dataSource: [],
  };

  onClick = () => {
    Modal.success({
      maskClosable: false,
      title: "我是第一个弹窗",
      mask: true,
      onOk: () => {
        this.onOkhandler();
      },
    });
  };
  onOkhandler = () => {
    let _dataSource = [
      { name: "肥虫", age: "12" },
      { name: "猪兜", age: "24" },
    ];
    this.setState({
      dataSource: _dataSource,
      modalFlag: true,
    });
  };
  renderModal = () => {
    console.log(2);
    return (
      <Modal
        onCancel={this.onCancel}
        visible={this.state.modalFlag}
        maskClosable={false}
        centered={true}
        width="600px"
        height="600px"
        footer={false}
      >
        <Table
          dataSource={this.state.dataSource}
          columns={this.state.columns}
        />
        <Button>1111</Button>
        <Button>1111</Button>
      </Modal>
    );
  };
  // 点击右上角的x
  onCancel = () => {
    this.setState({
      modalFlag: false,
    });
  };
  render() {
    return (
      <div>
        {this.renderModal()}
        <div>
          <h2>222</h2>
        </div>
        <Button onClick={this.onClick}>点击弹出第一个弹窗</Button>
      </div>
    );
  }
}
