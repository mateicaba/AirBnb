import React from "react";
import { Layout, Form, Input } from "antd";

function Login() {
    return (
      <Layout>
        <Layout.Content>
          <Form>
            <Form.Item
              name="username"
              requiredMark
              required
              label="Username"
              rules={[{ required: true, message: "Username required" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              requiredMark
              required
              label="Password"
              rules={[{ required: true, message: "Password required" }]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Layout.Content>
      </Layout>
    );
}
export default Login;