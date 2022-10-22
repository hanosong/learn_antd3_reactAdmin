import React, { Component } from "react";
import { Modal, Table } from "antd";

// 在表格的最后一行增加总计字段，自动统计每一列的总和
export default class index extends Component {
  state = {
    columns: [
      {
        title: "",
        dataIndex: "index",
        key: "index",
        render: (text, record, index) => {
          if (index + 1 !== this.state.dataSource.length) {
            return index + 1;
          }
          return "total";
        },
        onCell: (record, rowIndex) => {
          console.log(record, rowIndex, 22222);
        },
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
        sorter: (a, b) => {
          if (a.name && b.name) {
            return a.age - b.age;
          }
        },
        // sortOrder: "descend", 默认降序排列
      },
      {
        title: "工资",
        dataIndex: "salaries",
        key: "salaries",
        sorter: (a, b) => {
          if (a.name && b.name) {
            return a.salaries - b.salaries;
          }
        },
      },
    ],
    dataSource: [
      {
        name: "胡彦斌",
        age: 12,
        // salaries: "23423.00",
        salaries: "212112",
      },
      {
        name: "劳工",
        age: 22,
        salaries: "243253.00",
      },
      {
        name: "大头",
        age: 32,
        salaries: "12194232.00",
      },
    ],
  };
  flag = true;
  // 排序
  onChange = (pagination, filters, sorter) => {
    // console.log("params", pagination, filters, sorter);
  };

  componentDidMount = () => {
    const { dataSource } = this.state;
    // 模拟调接口
    let keyList = Object.keys(dataSource[0]), //判断有多少列,['name', 'age', 'salaries']
      totalObj = {};
    for (let i = 0; i < keyList.length; i++) {
      let cal = 0;
      if (keyList[i] === "name") {
        totalObj[keyList[i]] = "";
        continue;
      }
      for (let j = 0; j < dataSource.length; j++) {
        //keyList[i] => 列名； dataSource[j][keyList[i]] => 该列的每一行数据
        // cal += parseInt(dataSource[j][keyList[i]], 10);
        cal += Number(dataSource[j][keyList[i]]);
      }
      totalObj[keyList[i]] = cal; // 这里插入formatNumber
    }
    this.setState({ dataSource: [...dataSource, totalObj] });
  };

  render() {
    return (
      <div>
        {this.flag
          ? Modal.warning({
              title: "222",
              content: "aaaa",
            })
          : ""}
        <Table
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          rowKey="salaries"
          pagination={false}
          onChange={this.onChange}
        />
        <div id="Test">1111</div>
        <button onClick={this.setTest}>++++</button>
      </div>
    );
  }
  setTest = () => {
    console.log(document.getElementById("Test"), 333);
  };
}
