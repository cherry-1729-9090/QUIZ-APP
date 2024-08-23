const mongoose = require('mongoose');

const QuizHistory = mongoose.model('QuizHistory', new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  score: { type: Number, required: true },
  attempted_at: { type: Date, default: Date.now },
}));

module.exports = QuizHistory;
