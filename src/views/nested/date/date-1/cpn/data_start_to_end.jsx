import { DatePicker } from "antd";
import React, { PureComponent } from "react";
import moment from "moment";

// 两个日期组件动态联动， 开始日期不得大于结束日期
export class DemoTimePicker extends PureComponent {
  state = {
    startDate: moment("20220921"),
    startChoosedDate: "", // 记录第一个日期条选择的时间
    endChoosedDate: "",
  };
  componentDidMount() {
    // console.log(this.state.startDate.valueOf()); //转时间戳
  }
  //   禁用固定的时间
  //   disabledDateHandler(current) {
  //     // current参数会打印出多个，为打开当前时间选择面板下所有的时间
  //     const { startDate } = this.state;
  //     if (!current) return false; // disabelDate返回true的值就是不可选的时间
  //     // return current; 所有日期均禁用 => current是选择面板下所有时间, 是一个moment对象
  //     // return current < moment(); 当前前（含当天）均不可选
  //     // return current && current < startDate; 指定日期（不含）之前不可选
  //   }

  // 开始日期禁用
  disabledStartDateHandler(current) {
    const { startChoosedDate, endChoosedDate } = this.state;
    console.log(!current || !endChoosedDate, 111);
    // 1: 如果没有选择开始时间，或者还没有选择结束日期， 则随意选择开始日期
    if (!current || !endChoosedDate) return false;
    // 2：如果选择了结束日期，则开始日期不得小于结束日期
    return current.valueOf() > endChoosedDate.valueOf();
  }

  // 结束日期禁用
  disabledEndDateHandler(current) {
    const { startChoosedDate, endChoosedDate } = this.state;
    console.log(!current || !startChoosedDate, 222);
    // 1: 如果没有选择开始时间，或者还没有选择结束日期， 则随意选择开始日期
    if (!current || !startChoosedDate) return false;
    //  2: 如果选择了开始日期，开始日期不得小于结束日期
    return startChoosedDate.valueOf() > current.valueOf();
  }
  // 开始日期改变回调
  onChangeStartDateHandler(time, formattime) {
    // 参数1：选择的日期的moment对象， 参数2：选择日期的字符串格式 => 受format的影响
    this.setState({
      startChoosedDate: time, // 记录开始日期
    });
  }

  // 结束日期改变回调
  onChangeEndDateHandler(time, formattime) {
    console.log(this.state.startChoosedDate, 2222);
    this.setState({
      endChoosedDate: time, // 记录结束日期
    });
  }
  render() {
    const { startChoosedDate, endChoosedDate } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "20%" }}>
          <DatePicker
            disabledDate={(current) => this.disabledStartDateHandler(current)}
            onChange={(time, formattime) =>
              this.onChangeStartDateHandler(time, formattime)
            }
            format={"YYYY/MM/DD"}
            placeholder="请输入开始日期"
          />
        </div>
        <div style={{ marginLeft: "5%" }}>
          <DatePicker
            // disabledEndDateHandler => 打开面板的一瞬间触发， current为面板上所有的Monent
            disabledDate={(current) => this.disabledEndDateHandler(current)}
            onChange={(time, formattime) =>
              this.onChangeEndDateHandler(time, formattime)
            }
            format={"YYYY/MM/DD"}
            placeholder="结束日期（不小于开始）"
          />
        </div>
      </div>
    );
  }
}

export default DemoTimePicker;
