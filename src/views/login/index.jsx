import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Form,
  Icon,
  Input,
  Button,
  message,
  Spin,
  Tooltip,
  Modal,
  Divider,
} from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import "./index.less";
import { login, getUserInfo } from "@/store/actions";
const Login = (props) => {
  const { form, token, login, getUserInfo } = props;
  const { getFieldDecorator } = form;

  const [loading, setLoading] = useState(false);

  // 用户名规范的正则匹配
  const regUerName = /^[A-Za-z]+$/;
  // 密码格式的正则匹配(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：
  // const regUerPsw = /^[a-zA-Z]\w{5,17}$/

  //当用户输入完用户名的时候，失焦，触发表单验证
  const handlerUserOnBlur = (e) => {
    if (!regUerName.test(e.target.value)) {
      Modal.warn({
        title: "用户名输入提示",
        content: "请输入英文字母构成的用户名",
        onOk: () => clearInputValHandler("username"),
      });
      return;
    }
    if (e.target.value.length < 6 || e.target.value.length > 18) {
      Modal.warn({
        title: "用户名输入提示",
        content: "用户名长度在6~18之间",
        onOk: () => clearInputValHandler("username"),
      });
      return;
    }
  };

  const handleLogin = (username, password) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("登录成功");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  // 当用户点击登录按钮的时候
  const handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // 对所有表单字段进行检验 如果是类组件，需要用this.props.from.validateFields
    form.validateFields((err, values) => {
      // 检验成功，在这里可以进行接口请求
      if (!err) {
        const { username, password } = values;
        handleLogin(username, password);
        // form.resetFields(); //清除表单输入的数据
      } else {
        console.log("检验失败!");
      }
    });
  };
  // 清除输入框的值
  const clearInputValHandler = (name) => {
    props.form.setFieldsValue({
      [name]: "",
    });
  };
  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form onSubmit={handleSubmit} className="content">
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item>
              <Tooltip
                trigger={["focus"]} // 输入聚焦的时候会持续触发
                placement="topLeft"
                title="let me tell u how to log in!"
              >
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: "请输入用户名",
                    },
                  ],
                  initialValue: "admin", // 初始值
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                    onBlur={handlerUserOnBlur}
                  />
                )}
              </Tooltip>
            </Form.Item>
            {/* 密码输入 */}
            <Form.Item>
              <Tooltip
                trigger={["focus"]} // 输入聚焦的时候会持续触发
                placement="topLeft"
                title="密码随便填！"
              >
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      whitespace: true,
                      message: "请输入密码",
                    },
                  ],
                  initialValue: "123456", // 初始值
                })(
                  <Input
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: "rgba(0,0,0,.25)" }}
                        //  onBlur={}
                      />
                    }
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Tooltip>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>

            {/* 登录下面的提示信息 */}
            <Divider>Tips</Divider>
            <Form.Item>
              <span>账号 : admin </span>
              <br />
              <span>账号 : editor</span>
              <br />
              <span>账号 : guest </span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);

export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
