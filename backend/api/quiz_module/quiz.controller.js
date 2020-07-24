const {
    create,
    getquizes,
    get_quiz_by_module,
    deleteQuiz,
    add_exam,
    get_exam_id,
    getIdes,
    delete_exam
} = require('./quiz.services');

module.exports = {
    add_quiz: (req, res) => {
        const body = req.body;
        getIdes(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results1.length === 1) {
                body.course_id = results1[0].course_id;
                body.module_id = results1[0].id;
                get_exam_id(body, (err, results2) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    if (results2.length === 1) {
                        body.quiz = results2[0].id;
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
    get_quiz_by_module: (req, res) => {
        const body = req.body;
        getIdes(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(results);
            if (results.length > 0) {
                body.course_id = results[0].course_id;
                body.module_id = results[0].id
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
                        body.hard = results1[0].hard;
                        get_quiz_by_module(body, (err, results2) => {
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
                                    hard: body.hard,
                                    data: results2
                                })
                            }
                        })
                    }
                })
            }
        })
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
    ///////////////////////////////////////////////
    add_exam: (req, res) => {
        const body = req.body;
        getIdes(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(body);
            if (results.length === 1) {
                body.course_id = results[0].course_id;
                body.module_id = results[0].id;
                add_exam(body, (err, results2) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results2
                    })
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
                    message: 'database connection error'
                });
            }
            console.log(results);
            if (results.length === 1) {
                body.course_id = results[0].course_id;
                body.module_id = results[0].id;
                delete_exam(body, (err, results1) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: results1
                    })
                })
            }
        });
    },
}