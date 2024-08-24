import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { registerUser } from '../axiosCalls/userCalls';

const { Title, Text } = Typography;

function RegisterPage() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await registerUser(values);
    console.log('Data:', data);
    console.log('Data message:', data.message);
    if (data && data.message === 'Username already exists') {
      message.error('Username already exists. Please choose another one.');
    } else if (data && data.token) {
      message.success('Registration successful! Please log in.');
      navigate('/login');
    } else {
      message.error('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 300 }}>
        <Title level={2}>Register</Title>
        <Form onFinish={onFinish}>
          <Form.Item name="user_name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Register
            </Button>
          </Form.Item>
        </Form>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <Text>
            Already registered? <Link to="/login">Please log in</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}

export default RegisterPage;
