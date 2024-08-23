const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const { question_description, type, options, correct_options, difficulty, quiz_id } = req.body;
    const question = new Question({
      question_description,
      type,
      options,
      correct_options,
      difficulty,
      quiz_id,
    });
    await question.save();
    res.status(201).json({ message: 'Question added successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuestionsByDifficulty = async (req, res) => {
  try {
    const { quiz_id, difficulty } = req.params;
    const questions = await Question.find({ quiz_id, difficulty });
    res.status(200).json(questions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
