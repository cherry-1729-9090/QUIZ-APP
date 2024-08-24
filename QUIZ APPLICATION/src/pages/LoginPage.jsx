import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { Form, Input, Button, Card, Typography } from 'antd';
import { loginUser } from '../axiosCalls/userCalls';

const { Title } = Typography;

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const data = await loginUser(values);
    if (data) {
      login(data.token);
      navigate('/');
    } else {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: 300 }}>
        <Title level={2}>Login</Title>
        <Form onFinish={onFinish}>
          <Form.Item name="user_name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
