const {
  create,
  getquizes,
  get_quiz_by_lesson,
  deleteQuiz,
  getids,
  getIdes,
  add_exam,
  delete_exam,
  get_exam_id
} = require("./quiz.services");

module.exports = {
  add_quiz: (req, res) => {
    const body = req.body;
    getids(body, (err, results1) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      if (results1.length > 0) {
        body.lesson_id = results1[0].id;
        body.course_id = results1[0].course_id;
        body.module_id = results1[0].module_id;
        get_exam_id(body, (err, results2) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "database connection error",
            });
          }
          if (results2.length === 1) {
            body.quiz = results2[0].id;
            create(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "database connection error",
                });
              }
              return res.status(200).json({
                success: 1,
                data: results,
              });
            });
          }
        })

      }
    })
  },
  getquizes: (req, res) => {
    getquizes(null, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  deleteQuiz: (req, res) => {
    const body = req.body;
    deleteQuiz(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  get_quiz_by_lesson: (req, res) => {
    const body = req.body;
    getIdes(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: 'database connection error'
        });
      }
      if (results.length > 0) {
        body.course_id = results[0].course_id;
        body.module_id = results[0].module_id;
        body.lesson_id = results[0].id;
        get_exam_id(body, (err, results1) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: 'database connection error'
            });
          }
          if (results1.length > 0) {
            body.quiz = results1[0].id;
            get_quiz_by_lesson(body, (err, results2) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: 'database connection error'
                });
              }
              if (results2.length > 0) {
                return res.status(200).json({
                  success: 1,
                  data: results2
                })
              }
            })
          }
        })
      }
    })
  },
  /////////////////////////////////////////////////////
  add_exam: (req, res) => {
    const body = req.body;
    getIdes(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      if (results.length > 0) {
        body.course_id = results[0].course_id;
        body.module_id = results[0].module_id;
        body.lesson_id = results[0].id;
        add_exam(body, (err, results1) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "database connection error",
            });
          }
          return res.status(200).json({
            success: 1,
            data: results1,
          });
        })
      }
    })
  },
  delete_exam: (req, res) => {
    const body = req.body;
    getIdes(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      if (results.length > 0) {
        body.course_id = results[0].course_id;
        body.module_id = results[0].module_id;
        body.lesson_id = results[0].id;
        delete_exam(body, (err, results1) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "database connection error",
            });
          }
          return res.status(200).json({
            success: 1,
            data: results1,
          });
        })
      }
    })
  }
};
