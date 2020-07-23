const {
    login,
    updateAdmin,
    add_admin
} = require('./admin.controller');
const express = require('express');
const router = express.Router();
const { checkToken } = require('../../auth/token_validation');

router.post('/add_admin', checkToken, add_admin);
router.put('/update_password', checkToken, (req, res, next) => {
    console.log(req.body);
    next();
}, updateAdmin)
router.post('/login_admin', login);

module.exports = router