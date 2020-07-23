const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into quiz_section (type , question , answer, hint ,ans1 , ans2 , ans3 , ans4 , hintAns1 , hintAns2 , hintAns3, section_id , lesson_id, module_id , course_id,section_name , lesson_name, module_name , course_name ,sort,inst, classname) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.type,
                data.question,
                data.answer,
                data.hint,
                data.ans1,
                data.ans2,
                data.ans3,
                data.ans4,
                data.hintAns1,
                data.hintAns2,
                data.hintAns3,
                data.section_id,
                data.lesson_id,
                data.module_id,
                data.course_id,
                data.section_name,
                data.lesson_name,
                data.module_name,
                data.course_name,
                data.sort,
                data.inst,
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
            `select id,lesson_id,module_id,course_id from section where title = ? and lesson_name = ? and module = ? and course_name = ? and classname = ?`,
            [
                data.section_name,
                data.lesson_name,
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
    getquizes: (data, callback) => {
        pool.query(
            `select * from quiz_section order by section_name ASC , sort ASC`,
            [],
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
            `select * from quiz_section where section_name=? and lesson_name=? and module_name=? and course_name=? and inst=? order by sort ASC`,
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
    deleteQuiz: (data, callback) => {
        pool.query(
            `delete from quiz_section where section_name=? and lesson_name=? and module_name=? and course_name=? and sort= ? and inst = ?`,
            [
                data.section_name,
                data.lesson_name,
                data.module_name,
                data.course_name,
                data.sort,
                data.inst
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