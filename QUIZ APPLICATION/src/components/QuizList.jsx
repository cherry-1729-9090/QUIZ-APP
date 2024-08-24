import React, { useEffect, useState, useContext } from 'react';
import { List, Button, Modal, Radio, Spin } from 'antd';
import { getQuizzes } from '../axiosCalls/quizCalls';
import { GlobalContext } from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import './QuizList.css';

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
    return <Spin className="loading-spinner" />;
  }

  return (
    <>
      <div className="quiz-list-container">
        <h2 className="quiz-list-title">Available Quizzes</h2>
        <div className="quiz-grid">
          {quizzes.map(quiz => (
            <div
              key={quiz._id}
              className="quiz-item"
              onClick={() => { setSelectedQuiz(quiz); setModalVisible(true); }}
            >
              <h3 className="quiz-title">{quiz.quiz_name}</h3>
              <p className="quiz-description">{quiz.quiz_description}</p>
              <Button className="start-button" type="primary">
                Start Quiz
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        title={<h3 className="modal-title">{selectedQuiz?.quiz_name}</h3>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setModalVisible(false)} className="modal-button cancel-button">
            Cancel
          </Button>,
          <Button key="start" type="primary" onClick={startQuiz} className="modal-button start-button">
            Start Quiz
          </Button>
        ]}
        className="quiz-modal"
      >
        <p className="quiz-description">{selectedQuiz?.quiz_description}</p>
        <Radio.Group onChange={(e) => setDifficulty(e.target.value)} value={difficulty} className="difficulty-group">
          <Radio value="easy">Easy</Radio>
          <Radio value="medium">Medium</Radio>
          <Radio value="hard">Hard</Radio>
        </Radio.Group>
      </Modal>
    </>
  );
}

export default QuizList;
