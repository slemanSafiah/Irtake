const {
    add_one,
    get_all,
    get_courses_inst,
    get_inst_course,
    get_stds_course,
    get_stds_course_inst,
    delete_one,
    updateAvailableOff,
    updateAvailableOn,
    get_course_std,
    get_available,
    get_end_date
} = require('./std_course.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.get('/get_all', checkToken, get_all);
router.post('/add_one', checkToken, add_one);
router.post('/get_course_in_inst', checkToken, get_courses_inst);
router.post('/get_inst_in_course', checkToken, get_inst_course);
router.post('/get_std_in_course', checkToken, get_stds_course);
router.post('/get_course_std', checkToken, get_course_std);
router.post('/get_std_in_course_inst', checkToken, get_stds_course_inst);
router.post('/get_available', checkToken, get_available)
router.post('/get_end_date', checkToken, get_end_date);
router.post('/delete_one', checkToken, delete_one);
router.put('/updateAvailableOn', checkToken, updateAvailableOn);
router.put('/updateAvailableOff', checkToken, updateAvailableOff);

module.exports = router;