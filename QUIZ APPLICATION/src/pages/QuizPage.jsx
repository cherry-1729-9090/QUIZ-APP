import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { getQuestions } from '../axiosCalls/questionCalls';
import { Progress, Card, Button, Radio, Spin } from 'antd';

function QuizPage({ match }) {
    const { quizId, score, setScore } = useContext(GlobalContext);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const difficulty = match.params.difficulty;
    // console.log(quizId, difficulty);
    console.log('quizId', quizId);
    console.log('difficulty', difficulty);+
    useEffect(() => {
        const fetchQuestions = async () => {
            const data = await getQuestions(quizId, difficulty);
            setQuestions(data || []);
            setLoading(false);
        };
        fetchQuestions();
    }, [quizId, difficulty]);

    const handleNextQuestion = () => {
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
