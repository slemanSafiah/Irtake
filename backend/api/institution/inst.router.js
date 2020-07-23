const {
    createInst,
    createInst1,
    getInsts,
    getInst,
    deleteInst,
    getInstByName,
    getInstByEmail,
    getInstByMobilNumber,
    updateInst,
    login,
    change_password
} = require('./inst.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();

router.post('/create_inst', checkToken, createInst);
router.post('/create_inst1', checkToken, createInst1);
router.get('/get_insts', checkToken, getInsts);
router.post('/get_inst', checkToken, getInst);
router.post('/get_inst_by_mobil_number', checkToken, getInstByMobilNumber);
router.post('/get_inst_by_name', checkToken, getInstByName);
router.post('/get_inst_by_email', checkToken, getInstByEmail);
router.post('/delete_inst', checkToken, deleteInst);
router.post('/login_inst', login);
router.put('/change_password', checkToken, change_password)
router.put('/update_inst', checkToken, updateInst);


module.exports = router;