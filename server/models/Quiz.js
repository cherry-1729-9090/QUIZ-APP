const mongoose = require('mongoose');
const TopScores = require('./topScores');
const User = require('./User');

const quizSchema = new mongoose.Schema({
  quiz_id: mongoose.Schema.Types.ObjectId,
  quiz_name: { type: String, required: true },
  quiz_description: { type: String },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Middleware to create topScores entries for new quizzes
quizSchema.post('save', async function (doc, next) {
  try {
    const users = await User.find({});
    const topScores = users.map(user => ({
      quiz_id: doc._id,
      user_id: user._id,
      score: 0,
    }));
    await TopScores.insertMany(topScores);
    next();
  } catch (error) {
    next(error);
  }
});

const Quiz = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
