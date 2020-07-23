const {
    create,
    getUsers,
    getUserBynumber,
    getUsersByInst,
    getUsersByName,
    deleteUser,
    getInstNumber,
    getIdforInst,
    updateUser
} = require('./student.service');

const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const { sign } = require('jsonwebtoken');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(body);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    getAllUsers: (req, res) => {
        getUsers(null, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUserByNumber: (req, res) => {
        const body = req.body;
        getUserBynumber(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUsersByInst: (req, res) => {
        const body = req.body;
        getUsersByInst(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getUsersByName: (req, res) => {
        const body = req.body;
        getUsersByName(body.name, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    deleteUser: (req, res) => {
        const body = req.body;
        console.log(body);
        deleteUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getInstNumber: (req, res) => {
        const body = req.body;
        getInstNumber(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    updateUser: (req, res) => {
        const body = req.body;
        getIdforInst(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.institution_id = result[0].id;
            updateUser(body, (err, results) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                return res.status(200).json({
                    success: 1,
                    data: results
                })
            })
        })
    },
}