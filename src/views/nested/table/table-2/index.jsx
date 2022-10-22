import React, { memo } from "react";
import { Table, Input, Select, DatePicker, Col, Row, Button } from "antd";
import { defaultColumnsConfig } from "../style/tableConfig";
import { useState } from "react";
import * as ennums from "../ennums/table_1_options";
import AmtFormInput from "../utils/amtFormInput";
import "../style/style.less";
import moment from "moment";
const Option = Select.Option;
/* 表格有 列： 
    0：序号
    1：姓名（输入框）
    2. 生日（日期选择器）
    3. 性别（下拉框）
    4：工资（只能输入数字，且有千分位和提示）
    5：学号（输入框，有三组，中间可输入，其他有默认值）
*/

const TrendsTable = memo(() => {
  // 表头
  let columnsConfig = [
    {
      ...defaultColumnsConfig(10),
      title: "序号",
      dataIndex: "order",
      key: "order",
      render: (text, row, index) => index + 1,
    },
    {
      ...defaultColumnsConfig(60),
      title: "姓名",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => (
        <Input onBlur={(e) => foucusOutHandler(e, "name", index)} />
      ),
    },
    {
      ...defaultColumnsConfig(90),
      title: "生日",
      dataIndex: "birth",
      key: "birth",
      render: (text, record, index) => <DatePicker />,
    },
    {
      ...defaultColumnsConfig(70),
      title: "性别",
      dataIndex: "sex",
      key: "sex",
      render: (text, record, index) => (
        <Select
          allowClear
          onChange={(val) => selectedChangeHandler(val, "birth", index)}
          style={{ width: "90%" }} // 若不指定宽度，则下拉框会被压缩
          defaultValue={ennums.sexList[0].label}
        >
          {ennums.sexList.map((item, i) => (
            <Option value="item.value" key={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
      ),
    },
    {
      ...defaultColumnsConfig(70),
      title: "工资",
      dataIndex: "sar",
      key: "sar",
      render: (text, record, index) => (
        <AmtFormInput onChange={(e) => foucusOutHandler(e, "sar", index)} />
      ),
    },
    {
      ...defaultColumnsConfig(120),
      title: "学号",
      dataIndex: "orgNum",
      key: "orgNum",
      render: (text, record, index) => (
        <Row type="flex" justify="space-around">
          <Input value={"01825"} style={{ width: "35%" }} />
          <Input style={{ width: "35%" }} />
          <Input value={"999"} style={{ width: "30%" }} />
        </Row>
      ),
    },
  ];

  // 第一行默认渲染的数据
  const [dataSource, setDataSource] = useState([
    {
      name: "",
      birth: "",
      sex: "",
      sar: "",
      orgNum: "",
      rowId: moment().valueOf(),
    },
  ]);

  // 获取复选框选中的选项
  const [selectedRow, setSelectRow] = useState(0);
  // 输入框失焦回调
  function foucusOutHandler(e, name, index) {
    console.log(e, name, index, "foucusOutHandler");
  }

  // 下拉框回调
  function selectedChangeHandler(val, name, index) {
    console.log(val, name, index, "selectedChangeHandler");
  }

  // 复选框配置
  const rowSelection = {
    // selectedRowKeys: selectedChangeHandler.keys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRow(selectedRowKeys);
    },
  };

  // 增加
  const addHandler = () => {
    setDataSource(() => [
      ...dataSource,
      {
        name: "",
        birth: "",
        sex: "",
        sar: "",
        orgNum: "",
        rowId: moment().valueOf(),
      },
    ]);
  };

  // 删除
  const delHandler = () => {
    const _selectedRow = [...selectedRow];
    let _dataSource = [...dataSource];
    _dataSource = dataSource.filter(
      (item) => !_selectedRow.includes(item.rowId)
    );
    setDataSource(_dataSource);
  };

  // 提交
  const submitHandler = () => {
    console.log("submit", dataSource);
  };
  return (
    <div>
      <Table
        rowKey={(record) => record.rowId}
        columns={columnsConfig}
        dataSource={dataSource}
        bordered
        rowSelection={rowSelection}
      />
      <Row type="flex" justify="center" className="ant-btn-group">
        <Button onClick={addHandler}>增加</Button>
        <Button onClick={delHandler}>删除</Button>
        <Button type="primary" onClick={submitHandler}>
          提交
        </Button>
      </Row>
    </div>
  );
});

export default TrendsTable;
