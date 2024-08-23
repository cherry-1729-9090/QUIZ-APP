const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question_id: mongoose.Schema.Types.ObjectId,
  question_description: { type: String, required: true },
  type: {
    type: String,
    enum: ['single', 'multiple', 'true_false'],
    required: true,
  },
  options: [String],
  correct_options: [String],
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true,
  },
  quiz_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
});

module.exports = mongoose.model('Question', questionSchema);
