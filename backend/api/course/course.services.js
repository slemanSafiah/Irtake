const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into course (name, classname, path ) values (?,?,?)`,
            [
                data.name,
                data.classname,
                data.path
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getCourses: (data, callback) => {
        pool.query(
            `select * from course`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getCourseByName: (data, callback) => {
        pool.query(
            `select * from course where name = ?`,
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
    get_modulesByName: (data, callback) => {
        pool.query(
            `select name , id from module where course_name = ? order by sort`,
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
    getless: (data, callback) => {
        pool.query(
            `select id,name from lesson where module_name = ? and course_name= ? order by sort`,
            [
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
    deleteCourse: (data, callback) => {
        pool.query(
            `delete from course where name = ? and classname = ? `,
            [
                data.name,
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
    update_course: (data, callback) => {
        pool.query(
            `update course set classname=? where name = ?`,
            [
                data.classname,
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
    getCourseStatus: (data, callback) => {
        pool.query(
            `select available from std_course where course_name= ? and std_number = ?`,
            [
                data.course_name,
                data.std_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_course_quiz: (data, callback) => {
        pool.query(
            `select quiz from exam_course where course_id= ?`,
            [
                data.course_id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_module_quiz: (data, callback) => {
        pool.query(
            `select quiz,hard from exam where module_id= ?`,
            [
                data.module_id
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_lesson_quiz: (data, callback) => {
        pool.query(
            `select quiz from exam_lesson where lesson_id= ?`,
            [
                data.lesson_id
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