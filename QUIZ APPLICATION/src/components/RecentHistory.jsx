import React, { useContext, useEffect, useState } from 'react';
import { List, Spin, Pagination } from 'antd';
import { getUserQuizHistory } from '../axiosCalls/quizHistoryCalls';
import { GlobalContext } from '../context/GlobalContext';
import './RecentHistory.css';

function RecentHistory() {
  const { user } = useContext(GlobalContext);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    const fetchHistory = async () => {
      if (user) {
        const data = await getUserQuizHistory(user.user_id);
        setHistory(data || []);
      } else {
        console.error('User not defined');
      }
      setLoading(false);
    };
    fetchHistory();
  }, [user]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = history.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  if (loading) {
    return <Spin className="loading-spinner" />;
  }

  return (
    <div className="recent-history-container">
      <h2 className="history-title">Recent Quiz History</h2>
      <List
        className="history-list"
        dataSource={paginatedData}
        renderItem={(item) => (
          <List.Item className="history-item">
            <div className="quiz-info">
              <h4 className="quiz-name">{item.quiz_id.quiz_name}</h4>
              <p className="quiz-score">Score: <span>{item.score}</span></p>
              <p className='quiz-score'>attempted at :<span>{item.attempted_at}</span></p>
            </div>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={history.length}
        onChange={handlePageChange}
        className="pagination"
      />
    </div>
  );
}

export default RecentHistory;
