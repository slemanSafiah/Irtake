const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into quiz_course (type , question , answer, hint ,ans1 , ans2 , ans3 , ans4 , hintAns1 , hintAns2 , hintAns3, course_id ,course_name ,sort,inst , class_name,quiz) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
                data.course_id,
                data.course_name,
                data.sort,
                data.inst,
                data.class_name,
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
    getIds: (data, callback) => {
        pool.query(
            `select id from course where name = ? and classname = ?`,
            [
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
            `select * from quiz_course`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_quiz_by_course: (data, callback) => {
        pool.query(
            `select * from quiz_course where course_name=? and inst = ? and quiz = ? order by sort ASC`,
            [
                data.course_name,
                data.inst,
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
    deleteQuiz: (data, callback) => {
        pool.query(
            `delete from quiz_course where course_name = ? and sort = ? and inst = ? and class_name = ?`,
            [
                data.course_name,
                data.sort,
                data.inst,
                data.class_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    ///////////////////////////////////////////////////////////////////////////////
    add_exam: (data, callback) => {
        pool.query(
            `insert into exam_course (course_id,quiz) values (?,?)`,
            [
                data.course_id,
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
    getCourse: (data, callback) => {
        pool.query(
            `select id from course where name=? and classname = ?`,
            [
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
            `delete from exam_course where course_id = ? and quiz = ?`,
            [
                data.course_id,
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
            `select id from exam_course where course_id = ? and quiz = ?`,
            [
                data.course_id,
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