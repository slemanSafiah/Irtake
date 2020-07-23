const pool = require('../../config/database');

module.exports = {
    updateAdmin: (data, callback) => {
        pool.query(
            `update admin set password = ?`,
            [
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
    getAdminByEmail: (data, callback) => {
        pool.query(
            `select email , password from admin where email = ?`,
            [
                data.email
            ],
            (error, result, feilds) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, result);
            }
        )
    },
    add_admin: (data, callback) => {
        pool.query(
            `insert into admin values( ? , ? )`,
            [
                data.email,
                data.password
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    }
}