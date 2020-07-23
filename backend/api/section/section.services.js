const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into section ( title , text ,lesson_id, module_id,course_id lesson_name , module , course_name, url , sort, classname) values (?,?,?,?,?,?,?,?)`,
            [
                data.title,
                data.text,
                data.lesson_id,
                data.module_id,
                data.course_id,
                data.lesson_name,
                data.module,
                data.course_name,
                data.url,
                data.sort,
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
    getIds: (data, callback) => {
        pool.query(
            `select id,module_id,course_id from lesson where course_name= ? and module=? and name=?`,
            [
                data.course_name,
                data.module_name,
                data.lesson_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getSections: (data, callback) => {
        pool.query(
            `select * from section where course_name= ? and module=? and lesson_name=? and classname = ? order by sort`,
            [
                data.book,
                data.module,
                data.lesson,
                data.classname,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getSectionsQ: (data, callback) => {
        pool.query(
            `select * from quiz_section where course_name= ? and module=? and lesson_name=? and classname = ? order by sort`,
            [
                data.book,
                data.module,
                data.lesson,
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
    deleteSection: (data, callback) => {
        pool.query(
            `delete from section where course_name=? and module=? and lesson_name=? and title=? and classname = ? `,
            [
                data.course_name,
                data.module,
                data.lesson_name,
                data.title,
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
    editSections: (data, callback) => {
        pool.query(
            `update section set text = ? where course_name= ? and module=? and lesson_name=? and title = ?`,
            [
                data.text,
                data.course_name,
                data.module,
                data.lesson_name,
                data.title
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_quiz_sp: (data, callback) => {
        pool.query(
            `select * from quiz_section where section_name=? and lesson_name=? and module_name=? and course_name=? and inst = ? order by sort ASC`,
            [
                data.section_name,
                data.lesson_name,
                data.module_name,
                data.course_name,
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
    getStatus: (data, callback) => {
        pool.query(
            `select status from lesson_marks where lesson_name=? and module_name=? and course_name=? and std_num=?`,
            [
                data.lesson_name,
                data.module_name,
                data.course_name,
                data.std_num
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
            `select available from std_course where course_name=? and std_number=?`,
            [
                data.course_name,
                data.std_num
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