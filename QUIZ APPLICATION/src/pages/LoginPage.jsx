import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { loginUser } from '../axiosCalls/userCalls';

const { Title, Text } = Typography;

function LoginPage() {
  const { setUser,setUserId } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    const data = await loginUser(values);
    if (data && data.token) {
      localStorage.setItem('token', data.token);
      setUser(data.user);
      message.success('Login successful!');
      navigate('/');
    } else {
      setLoading(false);
      if (data && data.message === 'User not found') {
        message.error('User not found. Please register.');
      } else if (data && data.message === 'Invalid credentials') {
        message.error('Invalid credentials. Please try again.');
      } else {
        message.error('Login failed. Please check your credentials.');
      }
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
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          <Text>
            New user? <Link to="/register">Please register</Link>
          </Text>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
