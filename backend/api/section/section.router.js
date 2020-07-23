const {
    getSections,
    deleteSection,
    editSections
} = require('./section.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.put('/edit_section', checkToken, editSections);
router.post('/get_sections', checkToken, getSections);
router.post('/delete_section', checkToken, deleteSection);


module.exports = router;