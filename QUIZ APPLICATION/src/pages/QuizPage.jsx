import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { GlobalContext } from '../context/GlobalContext';
import { getQuestions } from '../axiosCalls/questionCalls';
import { Progress, Card, Button, Radio, Spin } from 'antd';
import { createQuizHistory } from '../axiosCalls/quizHistoryCalls';
import { updateTopScores } from '../axiosCalls/topScoresCalls';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
    const { userId, quizId, score, setScore } = useContext(GlobalContext);
    const { difficulty } = useParams(); // Access the route parameter directly
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const navigate = useNavigate();
    console.log('quizId', quizId);
    console.log('difficulty', difficulty);

    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions(quizId, difficulty);
            setQuestions(data || []);
            setLoading(false);
        };
        fetchQuestions();
    }, [quizId, difficulty]);

    const handleNextQuestion = () => {
        console.log(questions)
        const correctAnswer = questions[currentQuestion].correct_options[0];
        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
        }
        setSelectedAnswer(null);
        setCurrentQuestion(currentQuestion + 1);
    };

    if (loading) {
        return <Spin style={{ display: 'block', margin: 'auto' }} />;
    }

    if (currentQuestion >= questions.length) {
        return (
            <Card title="Quiz Completed">
                <p>Your final score is: {score}</p>
                <Button title='Navigate to Home' onClick={() => {createQuizHistory(userId, quizId, score); updateTopScores(userId,quizId,score);navigate('/')}} />
            </Card>
        );
    }

    return (
        <>
            <Progress percent={(currentQuestion / questions.length) * 100} />
            <Card title={`Question ${currentQuestion + 1}`}>
                <p>{questions[currentQuestion].question_description}</p>
                <Radio.Group
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                    value={selectedAnswer}
                >
                    {questions[currentQuestion].options.map((option, index) => (
                        <Radio key={index} value={option}>
                            {option}
                        </Radio>
                    ))}
                </Radio.Group>
            </Card>
            <Button
                type="primary"
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                style={{ marginTop: '20px' }}
            >
                {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
        </>
    );
}

export default QuizPage;
