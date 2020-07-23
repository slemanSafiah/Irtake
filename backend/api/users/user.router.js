const {
    createUser,
    getAllUsers,
    getUserByNumber,
    login,
    getUsersByName,
    deleteUser,
    change_password
} = require('./user.controller');
const express = require('express');
const router = express.Router();
const { checkToken } = require('../../auth/token_validation');


router.get('/get_users', checkToken, getAllUsers);
router.post('/login', login);
router.post('/add_user', createUser);
router.post('/get_user_by_mNumber', checkToken, getUserByNumber);
router.post('/get_users_By_Name', checkToken, getUsersByName);
router.post('/delete_user', checkToken, deleteUser);
router.put('/change_password', checkToken, change_password)

module.exports = router