import React, { PureComponent } from "react";
import { Button, Modal } from "antd";
// import RenderModal from "./cpn/01_renderModal";
// 模拟点击后调接口，弹出弹窗，渲染弹窗  / 类组件的写法
export class App extends PureComponent {
  state = {
    message: "",
    flag: false,
  };
  renderModal() {
    console.log(1);
    setTimeout(() => {
      this.setState({
        message: {
          name: "猪兜",
          age: 18,
        },
        flag: true,
      });
    }, 1000);
  }
  render() {
    const { message, flag } = this.state;
    return (
      <div>
        <h2>点击安妮，模拟调接口，进行弹窗</h2>
        <Button onClick={() => this.renderModal()}>clickMe</Button>
        {/* <RenderModal {...message} flag={flag} /> */}
        {/* <Modal confirmLoading={true} visible={false}>
          111111
        </Modal> */}
      </div>
    );
  }
}
export default App;
