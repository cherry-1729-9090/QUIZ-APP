import React, { useEffect, useContext } from 'react';
import QuizList from '../components/QuizList';
import RecentHistory from '../components/RecentHistory';
import ThemeToggle from '../components/ThemeToggle';
import { Layout, Row, Col, Typography } from 'antd';
import { GlobalContext } from '../context/GlobalContext';

const { Header, Content } = Layout;
const { Title } = Typography;

function HomePage() {
  const { user } = useContext(GlobalContext); // Correct placement of useContext

  useEffect(() => {
    console.log('User:', user);
    try{

    }catch(err){
      console.log('Error:', err);
    }
  }, []); // Add user as a dependency

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>Quiz App</Title>
        <ThemeToggle />
      </Header>
      <Content style={{ padding: '20px', display:'flex' , flexDirection:'column',alignItems:'center'}}>
          <Col span={12}>
            <QuizList style={{width : '100vw'}}/>
          </Col>
          <Col span={12}>
            <RecentHistory style={{width : '100vw'}}/>
          </Col>
      </Content>
    </Layout>
  );
}

export default HomePage;
