const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into module_marks (module_id,module_name,course_id , std_num , course_name , mark , status) values (?,?,?,?,?,?,?)`,
            [
                data.module_id,
                data.module_name,
                data.course_id,
                data.std_num,
                data.course_name,
                data.mark,
                data.status
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getMarksp: (data, callback) => {
        pool.query(
            `select mark from module_marks where std_num = ? and module_name = ? and course_name = ?`,
            [
                data.std_num,
                data.module_name,
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    setChecked: (data, callback) => {
        pool.query(
            `update module_marks set status = ?  where std_num =? and module_name=? and course_name = ?`,
            [
                data.status,
                data.std_num,
                data.module_name,
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getStatus: (data, callback) => {
        pool.query(
            `select status from module_marks where std_num =? and module_name=? and course_name = ?`,
            [
                data.std_num,
                data.module_name,
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getCourse_id: (data, callback) => {
        pool.query(
            `select id from course where name = ?`,
            [
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getModule_id: (data, callback) => {
        pool.query(
            `select id from module where name = ?`,
            [
                data.module_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
}