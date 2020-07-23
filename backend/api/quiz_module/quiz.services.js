const pool = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    pool.query(
      `insert into quiz_module (type , question , answer, hint ,ans1 , ans2 , ans3 , ans4 , hintAns1 , hintAns2 , hintAns3, module_id ,  module_name , course_id , course_name ,sort,inst,class_name, quiz) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
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
        data.module_id,
        data.module_name,
        data.course_id,
        data.course_name,
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
    );
  },
  getquizes: (data, callback) => {
    pool.query(
      `select * from quiz_module order by module_name ASC , sort ASC`,
      [],
      (error, results, feilds) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  get_quiz_by_module: (data, callback) => {
    pool.query(
      `select * from quiz_module where module_name= ? and course_name=? and inst = ? and quiz = ? order by sort ASC`,
      [
        data.module_name,
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
    );
  },
  deleteQuiz: (data, callback) => {
    pool.query(
      `delete from quiz_module where module_name = ? and course_name=? and sort= ? and inst = ?`,
      [
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
    );
  },
  //////////////////////////////////////////////////////
  add_exam: (data, callback) => {
    pool.query(
      `insert into exam (course_id , module_id , quiz, hard) values (?,?,?,?)`,
      [
        data.course_id,
        data.module_id,
        data.quiz,
        data.hard
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
      `select id, course_id from module where course_name = ? and name = ? and class_name = ?`,
      [
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
  get_exam_id: (data, callback) => {
    pool.query(
      `select id , hard from exam where course_id = ? and module_id = ? and quiz = ?`,
      [
        data.course_id,
        data.module_id,
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
  delete_exam: (data, callback) => {
    pool.query(
      `delete from exam where course_id = ? and module_id = ? and quiz = ?`,
      [
        data.course_id,
        data.module_id,
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
};
