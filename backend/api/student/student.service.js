const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into student (name , mobil_number , inst_name) values (?,?,?)`,
            [
                data.name,
                data.mobil_number,
                data.inst_name,
            ],
            (error, result, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, result);
            }
        )
    },
    getUsers: callback => {
        pool.query(
            `select id,name ,mobil_number from student`,
            [],
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
            `select  name, inst_name, password from student where mobil_number = ?`,
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
    getUsersByInst: (data, callback) => {
        pool.query(
            `select name, mobil_number from student where inst_name = ?`,
            [
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getIdforInst: (data, callback) => {
        pool.query(
            `select id from institution where name = ?`,
            [
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getUsersByName: (name, callback) => {
        pool.query(
            `select mobil_number,inst_name from student where name = ?`,
            [name],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstNumber: (name, callback) => {
        pool.query(
            `select count(*)  from student where inst_name = ?`,
            [inst_name],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteUser: (data, callback) => {
        pool.query(
            `delete from student where mobil_number = ?`,
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
    updateUser: (data, callback) => {
        pool.query(
            `update student set name=?,inst_name=? where mobil_number = ?`,
            [
                data.name,
                data.inst_name,
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
}   