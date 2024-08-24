import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { getQuestions } from '../axiosCalls/questionCalls';
import { Progress, Card, Button, Radio, Checkbox, Spin } from 'antd';
import { createQuizHistory } from '../axiosCalls/quizHistoryCalls';
import { updateTopScores } from '../axiosCalls/topScoresCalls';
import { useNavigate } from 'react-router-dom';
import './QuizPage.css';

function QuizPage() {
    const { user, quizId, score, setScore } = useContext(GlobalContext);
    const { difficulty } = useParams();
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const navigate = useNavigate();
    const userId = user._id;

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions(quizId, difficulty);
            setQuestions(data || []);
            setLoading(false);
        };
        fetchQuestions();
    }, [quizId, difficulty]);

    const handleNextQuestion = () => {
        setSelectedAnswer([]);
        setIsAnswerCorrect(null);
        setHasSubmitted(false);
        setCurrentQuestion(currentQuestion + 1);
    };

    const handleSubmitAnswer = () => {
        const current = questions[currentQuestion];
        let isCorrect = false;

        if (current.type === 'single') {
            isCorrect = selectedAnswer.length === 1 && selectedAnswer[0] === current.correct_options[0];
        } else if (current.type === 'multiple') {
            isCorrect = selectedAnswer.sort().join(',') === current.correct_options.sort().join(',');
        } else if (current.type === 'true_false') {
            isCorrect = selectedAnswer.length === 1 && selectedAnswer[0] === current.correct_options[0];
        }

        if (isCorrect) {
            setScore(score + 1);
        }

        setIsAnswerCorrect(isCorrect);
        setHasSubmitted(true);
    };

    if (loading) {
        return <Spin className="loading-spinner" />;
    }

    if (currentQuestion >= questions.length) {
        return (
            <div className="quiz-completed">
                <Card title="Quiz Completed" className="result-card">
                    <p className="final-score">Your final score is: {score}</p>
                    <Button 
                        className="home-button"
                        onClick={() => {
                            createQuizHistory(userId, quizId, score);
                            updateTopScores(userId, quizId, score);
                            navigate('/');
                        }}
                    >
                        Back to Home
                    </Button>
                </Card>
            </div>
        );
    }

    const current = questions[currentQuestion];

    return (
        <div className="quiz-container">
            <Progress 
                percent={(currentQuestion / questions.length) * 100} 
                className="quiz-progress"
            />
            <Card 
                title={`Question ${currentQuestion + 1} of ${questions.length}`}
                className="question-card"
            >
                <p className="question-text">{current.question_description}</p>
                {current.type === 'single' || current.type === 'true_false' ? (
                    <Radio.Group
                        onChange={(e) => setSelectedAnswer([e.target.value])}
                        value={selectedAnswer[0]}
                        className="options-group"
                        disabled={hasSubmitted}
                    >
                        {current.options.map((option, index) => (
                            <Radio 
                                key={index} 
                                value={option} 
                                className={`option-item ${
                                    hasSubmitted 
                                        ? option === current.correct_options[0] 
                                            ? 'correct' 
                                            : selectedAnswer[0] === option 
                                                ? 'incorrect' 
                                                : ''
                                        : ''
                                }`}
                            >
                                {option}
                            </Radio>
                        ))}
                    </Radio.Group>
                ) : (
                    <Checkbox.Group
                        onChange={(checkedValues) => setSelectedAnswer(checkedValues)}
                        value={selectedAnswer}
                        className="options-group"
                        disabled={hasSubmitted}
                    >
                        {current.options.map((option, index) => (
                            <Checkbox 
                                key={index} 
                                value={option} 
                                className={`option-item ${
                                    hasSubmitted 
                                        ? current.correct_options.includes(option) 
                                            ? 'correct' 
                                            : selectedAnswer.includes(option) 
                                                ? 'incorrect' 
                                                : ''
                                        : ''
                                }`}
                            >
                                {option}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                )}
            </Card>
            {!hasSubmitted ? (
                <Button
                    type="primary"
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer.length === 0}
                    className="next-button"
                >
                    Submit Answer
                </Button>
            ) : (
                <Button
                    type="primary"
                    onClick={handleNextQuestion}
                    className="next-button"
                >
                    {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
            )}
        </div>
    );
}

export default QuizPage;
