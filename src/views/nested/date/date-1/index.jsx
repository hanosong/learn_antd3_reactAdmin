import { Col, Row, Divider } from "antd";
import React, { PureComponent } from "react";
import DemoTimePickerEarly from "./cpn/data_early_than_today";

import DemoTimePicker from "./cpn/data_start_to_end";
import "./style.less";
export class DatePickerDemo extends PureComponent {
  render() {
    return (
      <div>
        <div className="content-warpper">
          <Divider orientation="left">
            1. 默认无范围约束，开始日期小于结束日期
          </Divider>
          <Row>
            <Col span={12} pull={2}>
              <DemoTimePicker />
            </Col>
          </Row>
          <Divider orientation="left">
            2. 默认不得选择今天之后，且开始日期小于结束日期（历史查询）
          </Divider>
          <DemoTimePickerEarly />
        </div>
      </div>
    );
  }
}

export default DatePickerDemo;
