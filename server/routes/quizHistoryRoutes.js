const express = require('express');
const router = express.Router();
const quizHistoryController = require('../controllers/quizHistoryController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth.auth, quizHistoryController.createQuizHistory);

router.get('/user', auth.auth, quizHistoryController.getUserQuizHistory);

router.get('/quiz/:quiz_id', auth.auth, quizHistoryController.getQuizHistoryForQuiz);

module.exports = router;
