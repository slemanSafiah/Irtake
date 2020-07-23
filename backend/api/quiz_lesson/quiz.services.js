const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into quiz_lesson (type , question ,hint , answer ,ans1 , ans2 , ans3 , ans4 , hintAns1 , hintAns2 , hintAns3 , course_id , module_id , lesson_id ,course_name , module_name, lesson_name ,sort,inst,class_name, quiz) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.type,
                data.question,
                data.hint,
                data.answer,
                data.ans1,
                data.ans2,
                data.ans3,
                data.ans4,
                data.hintAns1,
                data.hintAns2,
                data.hintAns3,
                data.course_id,
                data.module_id,
                data.lesson_id,
                data.course_name,
                data.module_name,
                data.lesson_name,
                data.sort,
                data.inst,
                data.classname,
                data.quiz
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
            `select * from quiz_lesson order by lesson_name ASC , sort ASC`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_quiz_by_lesson: (data, callback) => {
        pool.query(
            `select * from quiz_lesson where lesson_name=? and module_name=? and course_name=? and inst = ? order by sort ASC`,
            [
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
            `delete from quiz_lesson where lesson_name = ? and module_name=? and course_name=? and sort = ? and inst = ?`,
            [
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
    },
    getids: (data, callback) => {
        pool.query(
            `select * from lesson where name = ? and course_name = ? and module_name = ? and class_name = ?`,
            [
                data.lesson_name,
                data.course_name,
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
    ////////////////////////////////////////////////////////
    add_exam: (data, callback) => {
        pool.query(
            `insert into exam_lesson (course_id,module_id,lesson_id ,quiz) values (?,?,?,?)`,
            [
                data.course_id,
                data.module_id,
                data.lesson_id,
                data.quiz
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getIdes: (data, callback) => {
        pool.query(
            `select * from lesson where name=? and module_name=? and course_name=? and class_name = ?`,
            [
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
    delete_exam: (data, callback) => {
        pool.query(
            `delete from exam_lesson where course_id = ? and module_id=? and lesson_id=? and quiz = ?`,
            [
                data.course_id,
                data.module_id,
                data.lesson_id,
                data.quiz
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_exam_id: (data, callback) => {
        pool.query(
            `select id from exam_lesson where course_id = ? and module_id = ? and lesson_id = ? and quiz = ?`,
            [
                data.course_id,
                data.module_id,
                data.lesson_id,
                data.quiz
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