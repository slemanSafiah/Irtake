const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into lesson (name, module_name, course_name ,module_id ,course_id ,sort, class_name , inst) values (?,?,?,?,?,?,?,?)`,
            [
                data.name,
                data.module_name,
                data.course_name,
                data.module_id,
                data.course_id,
                data.sort,
                data.classname,
                data.inst
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getmoduleIdByName: (data, callback) => {
        pool.query(
            `select id ,course_id from module where name = ? and course_name = ? and class_name = ?`,
            [
                data.module_name,
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
    },
    getless: (data, callback) => {
        pool.query(
            `select * from lesson where module_name = ? and course_name= ? and class_name = ? order by sort`,
            [
                data.module_name,
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
    },
    getlessonSP: (data, callback) => {
        pool.query(
            `select * from section where module = ? and course_name= ? and lesson_name = ? and inst = ? order by sort`,
            [
                data.module,
                data.course_name,
                data.lesson_name,
                data.inst
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getLessons: (data, callback) => {
        pool.query(
            `select * from lesson order by sort`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteLesson: (data, callback) => {
        pool.query(
            `delete from lesson where course_name = ? name = ? module_name = ? and course_name = ? and class_name = ? and sort = ?`,
            [
                data.coruse_name,
                data.name,
                data.module,
                data.classname,
                data.sort
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    updateLesson: (data, callback) => {
        pool.query(
            `update lesson set name = ? where sort = ? and module_name = ? and course_name = ? and class_name = ? `,
            [
                data.name,
                data.sort,
                data.module_name,
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