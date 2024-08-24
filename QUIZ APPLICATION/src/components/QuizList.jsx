import React, { useEffect, useState, useContext } from 'react';
import { List, Card, Button, Modal, Radio, Spin } from 'antd';
import { getQuizzes } from '../axiosCalls/quizCalls';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const { setQuizId } = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      const data = await getQuizzes();
      setQuizzes(data || []);
      setLoading(false);
    };
    fetchQuizzes();
  }, []);

  const startQuiz = () => {
    setQuizId(selectedQuiz._id);
    navigate(`/quiz/${difficulty}`);
    setModalVisible(false);
  };

  if (loading) {
    return <Spin style={{ display: 'block', margin: 'auto' }} />;
  }

  return (
    <>
      <Card title="Available Quizzes">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={quizzes}
          renderItem={quiz => (
            <div key={quiz._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #e0e0e0', borderRadius: '8px', marginBottom: '10px' }}>
              <div>
                <h3>{quiz.quiz_name}</h3>
              </div>
              <Button type="primary" onClick={() => { setSelectedQuiz(quiz); setModalVisible(true); }}>
                Start
              </Button>
            </div>
          )}
        />
      </Card>

      <Modal
        title={selectedQuiz?.quiz_name}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="start" type="primary" onClick={startQuiz}>
            Start Quiz
          </Button>
        ]}
      >
        <p>{selectedQuiz?.quiz_description}</p>
        <Radio.Group onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
          <Radio value="easy">Easy</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="hard">Hard</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
}

export default QuizList;
