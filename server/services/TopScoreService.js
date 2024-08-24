// services/topScoresService.js

const TopScores = require('../models/TopScores');
const User = require('../models/User');
const Quiz = require('../models/Quiz');

const TopScoresService = {
  createTopScoresForNewUser: async (userId) => {
    const quizzes = await Quiz.find({});
    const topScores = quizzes.map(quiz => ({
      quiz_id: quiz._id,
      user_id: userId,
      score: 0,
    }));
    await TopScores.insertMany(topScores);
  },

  createTopScoresForNewQuiz: async (quizId) => {
    const users = await User.find({});
    const topScores = users.map(user => ({
      quiz_id: quizId,
      user_id: user._id,
      score: 0,
    }));
    await TopScores.insertMany(topScores);
  }
};

module.exports = TopScoresService;
