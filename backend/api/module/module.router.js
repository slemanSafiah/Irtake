const {
    addModule,
    getModules,
    deleteModule,
    getCourseIdByName,
    get_modulesByName
} = require('./module.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/add_module', checkToken, addModule);
router.get('/get_modules', getModules);
router.post('/get_modulesByName', get_modulesByName);
router.post('/delete_module', checkToken, deleteModule);

module.exports = router;