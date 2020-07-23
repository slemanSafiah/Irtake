const pool = require('../../config/database');

module.exports = {
    addFile: (data, callback) => {
        pool.query(
            `insert into image (type , course_name , module_name , lesson_name , section_name , path) values (?,?,?,?,?,?)`,
            [
                data.type,
                data.course_name,
                data.module_name,
                data.lesson_name,
                data.section_name,
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
    deleteFile: (data, callback) => {
        pool.query(
            `delete from image where type = ? and course_name = ? and module_name = ? and lesson_name = ? and section_name = ?`,
            [
                data.type,
                data.course_name,
                data.module_name,
                data.lesson_name,
                data.section_name,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    addSection: (data, callback) => {
        pool.query(
            `insert into section ( title , text ,lesson_id, module_id,course_id ,lesson_name , module , course_name, url , sort , classname ) values (?,?,?,?,?,?,?,?,?,?,?)`,
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
    getIds: (data, callback) => {
        pool.query(
            `select id,module_id,course_id from lesson where course_name= ? and module_name=? and name=? and class_name=?`,
            [
                data.course_name,
                data.module,
                data.lesson_name,
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
    getFile: (data, callback) => {
        pool.query(
            `select path from image where type = ? and course_name = ? and module_name = ? and lesson_name = ? and section_name = ?`,
            [
                data.type,
                data.course_name,
                data.module_name,
                data.lesson_name,
                data.section_name,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getFiles: (data, callback) => {
        pool.query(
            `select * from image`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
}