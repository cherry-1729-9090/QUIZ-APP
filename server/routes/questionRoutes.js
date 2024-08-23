const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const auth = require('../middlewares/authMiddleware');

router.post('/add', auth.auth, questionController.addQuestion);
router.get('/:quiz_id/:difficulty', questionController.getQuestionsByDifficulty);

module.exports = router;
