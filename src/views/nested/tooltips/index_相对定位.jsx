import React, { PureComponent } from "react";
import { Row, Col, Input } from "antd";
export class ToolTips extends PureComponent {
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Row>
          <div style={{ position: "absolute", top: "50px", left: "50px" }}>
            123
          </div>
          <div style={{ position: "absolute" }}>456</div>
          <div style={{ position: "absolute" }}>789</div>
        </Row>
        <Row>
          <Col span={6} style={{ marginTop: "70px" }} push={1}>
            <Input value={111111111} />
          </Col>
          <Col span={6} style={{ marginTop: "70px" }} push={2}>
            <Input value={111111111} />
          </Col>
          <Col span={6} style={{ marginTop: "70px" }} push={3}>
            <Input value={111111111} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ToolTips;
