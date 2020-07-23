const {
    add_quiz,
    getquizes,
    deleteQuiz,
    get_quiz_sp
} = require('./quiz.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/add_quiz', checkToken, add_quiz);
router.get('/get_quizes', checkToken, getquizes);
router.post('/get_quiz_sp', checkToken, get_quiz_sp);
router.post('/delete_quiz', checkToken, deleteQuiz);

module.exports = router;