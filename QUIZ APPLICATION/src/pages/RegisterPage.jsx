import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Card, Typography } from 'antd';
import { registerUser } from '../axiosCalls/userCalls';

const { Title } = Typography;

function RegisterPage() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const data = await registerUser(values);
    if (data) {
      navigate('/login');
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
      </Card>
    </div>
  );
}

export default RegisterPage;
