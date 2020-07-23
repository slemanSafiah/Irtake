const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into user(mobil_number, password ,name) values(?,?,?)`,
            [
                data.mobil_number,
                data.password,
                data.name
            ],
            (error, result, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, result);
            }
        )
    },
    getUserBynumber: (data, callback) => {
        pool.query(
            `select password,name from user where mobil_number = ?`,
            [
                data.mobil_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0]);
            }
        )
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from user where mobil_number = ?`,
            [
                data.mobil_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    change_password: (data, callback) => {
        pool.query(
            `update user set password = ? where mobil_number = ?`,
            [
                data.newPassword,
                data.mobil_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstId: (data, callback) => {
        pool.query(
            `select inst_name from student where mobil_number = ?`,
            [
                data.mobil_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results[0]);
            }
        )
    },
    getUsers: (data, callback) => {
        pool.query(
            `select * from user`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results);
            }
        )
    },
    getUserInst: (data, callback) => {
        pool.query(
            `select inst_name from student where mobil_number = ?`,
            [
                data.mobil_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results);
            }
        )
    },
}