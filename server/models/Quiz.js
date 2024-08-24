const mongoose = require('mongoose');
const TopScores = require('./TopScores'); // Ensure this model is defined correctly

const quizSchema = new mongoose.Schema({
  quiz_name: { type: String, required: true },
  quiz_description: { type: String },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
