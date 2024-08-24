import React, { useEffect } from 'react';
import QuizList from '../components/QuizList';
import RecentHistory from '../components/RecentHistory';
import ThemeToggle from '../components/ThemeToggle';
import { Layout, Row, Col, Typography } from 'antd';

const { Header, Content } = Layout;
const { Title } = Typography;

function HomePage() {
  useEffect(() => {
    document.title = "Home - Quiz App";
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>Quiz App</Title>
        <ThemeToggle />
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <QuizList />
          </Col>
          <Col span={12}>
            <RecentHistory />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default HomePage;
