const {
    add_quiz,
    getquizes,
    deleteQuiz,
    get_quiz_by_lesson,
    add_exam,
    delete_exam
} = require('./quiz.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/add_quiz', checkToken, add_quiz);
router.get('/get_quizes', checkToken, getquizes);
router.post('/get_quiz_by_lesson', checkToken, get_quiz_by_lesson);
router.post('/delete_quiz', checkToken, deleteQuiz);
//////////////////////////////////////////////////////////////////////////
router.post('/add_exam', add_exam);
router.post('/delete_exam', checkToken, delete_exam)
module.exports = router;