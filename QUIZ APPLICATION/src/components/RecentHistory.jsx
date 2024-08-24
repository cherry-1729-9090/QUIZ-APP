import React, { useContext, useEffect, useState } from 'react';
import { List, Card, Spin } from 'antd';
import { getTopScores } from '../axiosCalls/topScoresCalls';
import { GlobalContext } from '../context/GlobalContext';

function RecentHistory() {
  const { user } = useContext(GlobalContext);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      if (user) {  // Ensure user is defined
        const data = await getTopScores(user.user_id);
        setHistory(data || []);
      }
      setLoading(false);
    };
    fetchHistory();
  }, [user]);

  if (loading) {
    return <Spin style={{ display: 'block', margin: 'auto' }} />;
  }

  return (
    <Card title="Recent Quiz History">
      <List
        dataSource={history}
        renderItem={(item) => (
          <List.Item>
            {item.quiz_id.quiz_name}: {item.score}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default RecentHistory;
