const Quiz = require('../models/Quiz');
const TopScores = require('../models/TopScores');
const User = require('../models/user');

exports.createQuiz = async (req, res) => {
  try {
    const { quiz_name, quiz_description } = req.body;
    const created_by = req.user.user_id; 
    const quiz = new Quiz({ quiz_name, quiz_description, created_by });
    await quiz.save();

    // Automatically create top_scores entries for all users
    const users = await User.find({});
    const topScores = users.map(user => ({
      quiz_id: quiz._id,
      user_id: user._id,
    }));
    await TopScores.insertMany(topScores);

    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
