const mongoose = require('mongoose');
const TopScores = require('./TopScores');
const Quiz = require('./Quiz');

// Define the schema
const userSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  user_name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jwt: { type: String },
});

userSchema.post('save', async function (doc, next) {
  try {
    const quizzes = await Quiz.find({});
    const topScores = quizzes.map(quiz => ({
      quiz_id: quiz._id,
      user_id: doc._id,
      score: 0,
    }));
    await TopScores.insertMany(topScores);
    next();
  } catch (error) {
    next(error);
  }
});

// Check if the model already exists to avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
