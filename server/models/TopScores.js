const mongoose = require('mongoose');

const topScoresSchema = new mongoose.Schema({
  quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.models.TopScores || mongoose.model('TopScores', topScoresSchema);
