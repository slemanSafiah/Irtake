const {
    createUser,
    getAllUsers,
    getUserByNumber,
    getUsersByInst,
    getUsersByName,
    deleteUser,
    getInstNumber,
    updateUser
} = require('./student.controller');

const { checkToken } = require('../../auth/token_validation');
const express = require('express');
const router = express.Router();


router.get('/get_students', checkToken, getAllUsers);
router.post('/add_student', checkToken, createUser);
router.post('/get_student_by_mNumber', checkToken, getUserByNumber);
router.post('/get_students_By_institution', checkToken, getUsersByInst);
router.post('/get_students_By_Name', checkToken, getUsersByName);
router.post('/get_inst_number', checkToken, getInstNumber);
router.post('/delete_student', checkToken, deleteUser);
router.put('/update_student', checkToken, updateUser);

module.exports = router