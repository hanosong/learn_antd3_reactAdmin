import React, { PureComponent } from "react";
import { Row, Col, Input, Form } from "antd";
//index_flex布局实现标题和输入框平齐
export class ToolTips extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              textAlign: "center",
            }}
          >
            <span style={{ width: "20%" }}>{123}</span>
            <span style={{ width: "30%" }}>{456}</span>
            <span style={{ width: "30%" }}>{789}</span>
            <span style={{ width: "10%" }}>{789}</span>
          </div>
          <Form style={{ display: "flex" }}>
            <Form.Item style={{ width: "20%" }}>
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item style={{ width: "40%" }}>
              <Input style={{ width: "100%", marginLeft: "60px" }} />
            </Form.Item>
          </Form>

          {/* <Input style={{ width: "40%" }} />
            <Input style={{ width: "10%" }} /> */}
        </div>
      </div>
    );
  }
}

const RenderToolTips = Form.create()(ToolTips);
export default RenderToolTips;
