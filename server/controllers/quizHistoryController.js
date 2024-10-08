const QuizHistory = require('../models/QuizHistory');
const Quiz = require('../models/Quiz');
const User = require('../models/User');

exports.createQuizHistory = async (req, res) => {
  console.log('reached server for creating a new quiz history');
  console.log('req.body', req.body);
  try {
    const { quiz_id, score } = req.body;
    const user_id = req.user.user_id;

    const quizHistory = new QuizHistory({
      user_id,
      quiz_id,
      score,
    });

    await quizHistory.save();
    res.status(201).json({ message: 'Quiz history recorded successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserQuizHistory = async (req, res) => {
  console.log('reached server for fetching user quiz history');
  console.log('req.user in the quiz history fetching request to the server ', req.user);
  try {
    const user_id = req.user.user_id;
    const quizHistory = await QuizHistory.find({ user_id }) .populate({ path: 'quiz_id', select: 'quiz_name quiz_description' });
    res.status(200).json(quizHistory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuizHistoryForQuiz = async (req, res) => {
  try {
    const { quiz_id } = req.params;
    const quizHistory = await QuizHistory.find({ quiz_id }).populate('user_id', 'user_name');
    res.status(200).json(quizHistory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
