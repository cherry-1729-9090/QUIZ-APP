import React, { useEffect, useState } from 'react';
import { List, Card, Spin } from 'antd';
import { getQuizzes } from '../axiosCalls/quizCalls';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await getQuizzes();
      setQuizzes(data || []);
      setLoading(false);
    };
    fetchQuizzes();
  }, []);

  if (loading) {
    return <Spin style={{ display: 'block', margin: 'auto' }} />;
  }

  return (
    <Card title="Available Quizzes">
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={quizzes}
        renderItem={quiz => (
          <List.Item>
            <Card title={quiz.quiz_name}>{quiz.quiz_description}</Card>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default QuizList;
