const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const auth = require('../middlewares/authMiddleware');

router.post('/create', auth.auth, quizController.createQuiz);
router.get('/getAllQuizzes', quizController.getQuizzes);

module.exports = router;
