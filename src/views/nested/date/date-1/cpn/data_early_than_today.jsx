import { Col, DatePicker, Form, Row } from "antd";
import moment from "moment/moment";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useState } from "react";

const FormItem = Form.Item;
const Demo = memo((props) => {
  const [startChoosedDate, setStartChooseDate] = useState("");
  const [endChoosedDate, setEndChooseDate] = useState("");
  // 开始日期禁用
  function disabledStartDateHandler(current) {
    if (!current || !endChoosedDate) return current > moment();
    return current.valueOf() > endChoosedDate.valueOf();
  }

  // 结束日期禁用
  function disabledEndDateHandler(current) {
    if (!current || !startChoosedDate) return current > moment();
    return startChoosedDate.valueOf() > current.valueOf() || current > moment();
  }
  // 开始日期改变回调
  function onChangeStartDateHandler(time, formattime) {
    setStartChooseDate(time);
  }
  // 结束日期改变回调
  function onChangeEndDateHandler(time, formattime) {
    setEndChooseDate(time);
  }
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Form>
        <Row>
          <Col span={12} push={1}>
            <FormItem label="开始日期">
              {getFieldDecorator(`startDateEarly`)(
                <DatePicker
                  disabledDate={(current) => disabledStartDateHandler(current)}
                  onChange={(time, formattime) =>
                    onChangeStartDateHandler(time, formattime)
                  }
                  format={"YYYY/MM/DD"}
                />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="结束日期">
              {getFieldDecorator(`endDateEarly`)(
                <DatePicker
                  disabledDate={(current) => disabledEndDateHandler(current)}
                  onChange={(time, formattime) =>
                    onChangeEndDateHandler(time, formattime)
                  }
                  format={"YYYY/MM/DD"}
                />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    </div>
  );
});

Demo.propTypes = {};
const DemoTimePickerEarly = Form.create({})(Demo);
export default DemoTimePickerEarly;
