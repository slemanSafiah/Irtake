const {
    add_mark,
    getMarksp,
    setChecked,
    getStatus
} = require('./module_marks.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/add_mark', checkToken, add_mark);
router.post('/get_mark_sp', checkToken, getMarksp);
router.post('/get_status', checkToken, getStatus)
router.put('/set_checked', checkToken, setChecked);

module.exports = router;