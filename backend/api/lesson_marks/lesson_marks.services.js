const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into lesson_marks (lesson_id , course_id , module_id , lesson_name , course_name , module_name , std_num , mark, status) values (?,?,?,?,?,?,?,?,?)`,
            [
                data.lesson_id,
                data.course_id,
                data.module_id,
                data.lesson_name,
                data.course_name,
                data.module_name,
                data.std_num,
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
            `select mark from lesson_marks where std_num =? and lesson_name = ? and module_name=? and course_name = ?`,
            [
                data.std_num,
                data.lesson_name,
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
            `update lesson_marks set status = ?  where std_num =? and lesson_name = ? and module_name=? and course_name = ?`,
            [
                data.status,
                data.std_num,
                data.lesson_name,
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
            `select status from lesson_marks where std_num =? and lesson_name = ? and module_name=? and course_name = ?`,
            [
                data.std_num,
                data.lesson_name,
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
    getids: (data, callback) => {
        pool.query(
            `select lesson_id , module_id , course_id from quiz_lesson where lesson_name = ? and module_name=? and course_name = ?`,
            [
                data.lesson_name,
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
}