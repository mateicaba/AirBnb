import React, { useState } from "react";
import { Layout, Form, Input, Button, Checkbox, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./login.css";
import database from "../../db.json";

function Login(props) {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);

  const onFinish = (values) => {
    console.log("Form submitted: ", values);
    setError(null);
    props.setIsLoading(true);

    // Use the imported database object instead of fetching db.json
    const data = database;

    const user = data.users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );
    if (user) {
      props.setIsAuthenticated(true);
      // Check if "Remember me" checkbox is checked
      if (values.remember) {
        // Set a cookie that expires in 7 days
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        document.cookie = `username=${
          values.username
        }; expires=${expirationDate.toUTCString()}`;
      }
    } else {
      setError("Invalid username or password");
    }
    props.setIsLoading(false);
  };

  return (
    <Layout className="login-container">
      <Layout.Content className="login-content">
        <div className="login-form-container">
          <h1 className="login-title">Welcome Back</h1>
          {error && <p>{error}</p>}
          <Form
            className="login-form"
            form={form}
            onFinish={onFinish}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              requiredMark
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              requiredMark
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
            <Form.Item className="login-form-forgot">
              <Row justify="space-between">
                <Col>
                  <Checkbox name="checkbox" className="checkbox">
                    Remember me
                  </Checkbox>
                </Col>
                <Col>
                  <a className="login-form-forgot-link" href="/">
                    Forgot password
                  </a>
                </Col>
                <Col>
                  <a className="register-link" href="/registration">
                    Register
                  </a>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </Layout.Content>
    </Layout>
  );
}

export default Login;
