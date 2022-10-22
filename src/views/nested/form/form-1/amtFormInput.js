import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Input, Tooltip, Form } from "antd";

import formatNumber from "./formateNumber.js";

const AmtFormInput = (props) => {
  // const { getFieldDecorator, setFieldsValue } = props.form || {};
  const [formVal, setFormVal] = useState({
    amtText: props.value,
    amtTextTitle: "",
  });

  // 判断是否满足使用form的条件
  const isUseForm = Boolean(props.form && props.keyName);

  // 监控利息金额栏位输入
  const onChangeAmtText = (e) => {
    const value = e.target.value;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if (
      (!Number.isNaN(value) && reg.test(value)) ||
      value === "" ||
      value === "-"
    ) {
      setFormVal({
        amtText: value,
        amtTextTitle: value !== "" ? formatNumber(value) : "",
      });
      if (value === "") {
        // if (isUseForm) setFieldsValue({ [props.keyName]: value });
        props.onChange(value);
      }
    }
  };

  // 利息金额输入栏位视角后回调
  const onBlurAmtText = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setFormVal((formVal) => ({
        ...formVal,
        amtText: formVal.amtTextTitle,
      }));
      //回传父组件
      //   if (isUseForm) setFieldValue({ [props.keyName]: formVal.amtTextTitle }); // 使用父组件form可以从父组件用getFieldValue取值
      props.onChange(formVal.amtTextTitle); //不在当前组件内使用form父组件可以用onChange取输入框的值
    }
  };

  //输入框聚焦
  const onFocusAmtText = () => {
    const amtText =
      typeof formVal.amtTextTitle === "string"
        ? formVal.amtTextTitle.replace(/\,/g, "")
        : formVal.amtTextTitle;
    setFormVal((formVal) => ({
      ...formVal,
      amtText,
      amtTextTitle: amtText ? formatNumber(amtText) : "",
    }));
  };

  //

  useEffect(() => {
    const value =
      typeof props.value === "string"
        ? props.value.replace(/\,/g, "")
        : props.value;
    const amtText =
      typeof formVal.amtText === "string"
        ? formVal.amtText.replace(/\,/g, "")
        : formVal.amtText;
    if (!value || Number(value) != Number(amtText)) {
      setFormVal({
        amtText: value,
        amtTextTitle: value ? formatNumber(value) : "",
      });
    }
    if(props.isUpdata) {
      setFormVal({
        amtText: value ? formatNumber(value) : '',
        amtTextTitle: value ? formatNumber(value) : '',
      })
    }
    // if (isUseForm) setFieldsValue({ [props.keyName]: props.value });
  }, [props.value]);
  const TooltipWidth = props.TooltipWidth || 350;
  const title =
    props.title || window.GuipLocalType === "HK" ? "最终结果" : "最终结果";
  return (
    <div style={{ display: "inline-block", width: props.width || "100%" }}>
      <Tooltip
        trigger={["focus"]}
        title={`${title}:${formVal.amtTextTitle}`}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        {/*父组件传入了form表单的设置，就可以使用form的方法*/}
        <Input
          allowClear={!props.disabled}
          disabled={props.disabled}
          onChange={(e) => onChangeAmtText(e)}
          onBlur={(e) => onBlurAmtText(e)}
          onFocus={(e) => onFocusAmtText(e)}
          value={formVal.amtText}
          maxLength={props.maxLength || 20}
        />
      </Tooltip>
    </div>
  );
};
export default AmtFormInput;
