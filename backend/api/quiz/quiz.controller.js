const {
    create,
    getquizes,
    get_quiz_sp,
    deleteQuiz,
    getIds
} = require('./quiz.services');

module.exports = {
    add_quiz: (req, res) => {
        const body = req.body;
        getIds(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(body);
            if (results1.length > 0) {
                body.section_id = results1[0].id;
                body.lesson_id = results1[0].lesson_id;
                body.module_id = results1[0].module_id;
                body.course_id = results1[0].course_id;
                create(body, (err, results) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results
                    })
                });
            }
        })
    },
    getquizes: (req, res) => {
        getquizes(null, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    get_quiz_sp: (req, res) => {
        const body = req.body;
        get_quiz_sp(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(results);
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
    deleteQuiz: (req, res) => {
        const body = req.body;
        deleteQuiz(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        });
    },
}