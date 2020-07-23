const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into institution (name, email, mobil_number, password) values (?,?,?,?)`,
            [
                data.name,
                data.email,
                data.mobil_number,
                data.password
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    create1: (data, callback) => {
        pool.query(
            `insert into institution (name, email, mobil_number, password) values (?,?,?,?)`,
            [
                data.name,
                data.email,
                data.mobil_number,
                data.password
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInsts: (data, callback) => {
        pool.query(
            `select name from institution`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInst: (data, callback) => {
        pool.query(
            `select name, mobil_number from institution where id = ?`,
            [
                data.id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstByName: (data, callback) => {
        pool.query(
            `select name, mobil_number from institution where name = ?`,
            [
                data.name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstByEmail: (data, callback) => {
        pool.query(
            `select * from institution where email = ?`,
            [
                data.email
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstByMobilNumber: (data, callback) => {
        pool.query(
            `select * from institution where mobil_number = ?`,
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
    deleteInst: (data, callback) => {
        pool.query(
            `delete from institution where mobil_number = ? `,
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
    updateInst: (data, callback) => {
        pool.query(
            `update institution set name = ?  where email=? and mobil_number=?`,
            [
                data.name,
                data.email,
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
            `update institution set password = ? where id=?`,
            [
                data.newPassword,
                data.mobil_number,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
}