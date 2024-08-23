const express = require('express');
const router = express.Router();
const topScoreController = require('../controllers/topScoreController');

router.get('/:user_id', topScoreController.getTopScores);
router.post('/update', topScoreController.updateTopScores);


module.exports = router;