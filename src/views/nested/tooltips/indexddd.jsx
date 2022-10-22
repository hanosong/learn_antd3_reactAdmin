import React, { memo } from "react";
import { DatePicker, Form } from "antd";
import moment from "moment";
// 两个日期组件动态联动
// 开始日期不得大于结束日期 且 开始日期不得小于今天，结束日期在开始日期的30天以内
const DatePicerLearn = memo(() => {
  //   const { getFieldDecorator, validateFields, setFieldsValue, getFieldsValue } =
  //     props.form;
  return (
    <div>
      <Form>
        <Form.Item>{11}</Form.Item>
        {/* <Form.Item>{getFieldDecorator("startDate")(<DatePicker />)}</Form.Item> */}
      </Form>
    </div>
  );
});

const RenderDatePicerLearn = Form.create()(DatePicerLearn);
export default RenderDatePicerLearn;
