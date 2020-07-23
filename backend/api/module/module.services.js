const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into module (name, course_name, sort, course_id ,class_name) values (?,?,?,?,?)`,
            [
                data.name,
                data.course_name,
                data.sort,
                data.course_id,
                data.classname
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getCourseIdByName: (data, callback) => {
        pool.query(
            `select id from course where name = ? `,
            [
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
    getModules: (data, callback) => {
        pool.query(
            `select * from module order by sort`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_modulesByName: (data, callback) => {
        pool.query(
            `select name , id from module where course_name = ? and class_name = ? order by sort`,
            [
                data.module_name,
                data.classname
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteModule: (data, callback) => {
        pool.query(
            `delete from module where name = ? and course_name= ? and class_name= ?`,
            [
                data.name,
                data.course_name,
                data.classname

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