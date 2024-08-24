const Quiz = require('../models/Quiz');
const TopScoresService = require('../services/TopScoreService');
exports.createQuiz = async (req, res) => {
  try {
    const { quiz_name, quiz_description } = req.body;
    const created_by = req.user.user_id; 
    const quiz = new Quiz({ quiz_name, quiz_description, created_by });
    await quiz.save();

    // Automatically create top_scores entries for all users
    // const users = await User.find({});
    // const topScores = users.map(user => ({
    //   quiz_id: quiz._id,
    //   user_id: user._id,
    // }));
    // await TopScores.insertMany(topScores);

    await TopScoresService.createTopScoresForNewQuiz(quiz._id);
    console.log('Top scores created for new quiz');

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
