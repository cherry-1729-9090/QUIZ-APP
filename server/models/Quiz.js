const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quiz_id: mongoose.Schema.Types.ObjectId,
  quiz_name: { type: String, required: true },
  quiz_description: { type: String },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Quiz', quizSchema);
