const {
    addLesson,
    getLessons,
    deleteLesson,
    updateLesson,
    getless,
    getlessonSP
} = require('./lesson.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/add_lesson', checkToken, addLesson);
router.get('/get_lessons', getLessons);
router.post('/get_less', getless);
router.post('/get_lesson_sp', getlessonSP);
router.post('/delete_lesson', checkToken, deleteLesson);
router.put('/update_lesson', checkToken, updateLesson);

module.exports = router;