import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const RegistrationForm = () => {
const [form] = Form.useForm();
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
try {
setLoading(true);
const values = await form.validateFields();

  // check if passwords match
  if (values.password !== values.confirmPassword) {
    notification.error({ message: 'Error', description: 'Passwords do not match' });
    return;
  }

  // check if username is already taken
  const { data: users } = await axios.get('http://localhost:3002/users');
  const takenUsername = users.find(user => user.username === values.username);
  if (takenUsername) {
    notification.error({ message: 'Error', description: 'Username is already taken' });
    return;
  }

  // save new user
  await axios.post('http://localhost:3002/users', values);
  notification.success({ message: 'Success', description: 'New user created' });
  form.resetFields();
} catch (error) {
  notification.error({ message: 'Error', description: error.message });
} finally {
  setLoading(false);
}
};

const checkFormValidity = () => {
const values = form.getFieldsValue();
return values.username && values.password && values.confirmPassword;
};

return (
<div className="register-container">
<Form form={form} onFinish={handleSubmit}>
<Form.Item
name="username"
rules={[{ required: true, message: 'Please input your username' }]}
>
<Input prefix={<UserOutlined />} placeholder="Username" />
</Form.Item>
<Form.Item
name="password"
rules={[{ required: true, message: 'Please input your password' }]}
>
<Input
prefix={<LockOutlined />}
type="password"
placeholder="Password"
/>
</Form.Item>
<Form.Item
name="confirmPassword"
rules={[{ required: true, message: 'Please confirm your password' }]}
>
<Input
prefix={<LockOutlined />}
type="password"
placeholder="Confirm Password"
/>
</Form.Item>
<Form.Item>
<Button type="primary" htmlType="submit" disabled={!checkFormValidity}>
Register
</Button>
</Form.Item>
</Form>
</div>
);
};

export default RegistrationForm;