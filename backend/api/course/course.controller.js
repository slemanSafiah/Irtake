const {
    create,
    getCourses,
    getCourseByName,
    deleteCourse,
    get_modulesByName,
    getless,
    update_course,
    getCourseStatus,
    get_course_quiz,
    get_module_quiz,
    get_lesson_quiz
} = require('./course.services');

module.exports = {
    add_course: (req, res) => {
        const body = req.body;
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
    },
    getCourses: (req, res) => {
        getCourses(null, (err, results) => {
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
        })
    },
    getCourseByName: (req, res) => {
        const body = req.body;
        getCourseByName(body, (err, results) => {
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
        })
    },
    deleteCourse: (req, res) => {
        const body = req.body;
        deleteCourse(body, (err, results) => {
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
        })
    },
    get_course_details: (req, res) => {
        const data = {};
        const body = req.body;
        body.std_number = body.std_num;
        getCourseByName(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results.length > 0) {
                data.results = results;
                body.course_id = data.results[0].id;
                body.course_name = data.results[0].name;
                get_course_quiz(body, (err, results4) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    if (results4.length > 0) {
                        data.results[0].quiz_course = [];
                        for (let i = 0; i < results4.length; i++) {
                            data.results[0].quiz_course.push(results4[i].quiz);
                        }
                        getCourseStatus(body, (err, results3) => {
                            if (err) {
                                console.log(err);
                                return res.status(500).json({
                                    success: 0,
                                    message: 'database connection error'
                                });
                            }
                            body.course_status = 0;
                            if (results3.length != 0) {
                                body.course_status = results3[0].available;
                            }
                            get_modulesByName(body, (err, results1) => {
                                if (err) {
                                    console.log(err);
                                    return res.status(500).json({
                                        success: 0,
                                        message: 'database connection error'
                                    });
                                }
                                data.results.modules = results1;
                                for (let i = 0; i < results1.length; i++) {
                                    body.module_id = results1[i].id;
                                    get_module_quiz(body, (err, results5) => {
                                        if (err) {
                                            console.log(err);
                                            return res.status(500).json({
                                                success: 0,
                                                message: 'database connection error'
                                            });
                                        }
                                        data.results.modules[i].quiz = [];
                                        for (let i = 0; i < results5.length; i++) {
                                            data.results.modules[i].quiz.push(results5[i]);
                                        }
                                        data.results.modules[i].lessons = [];
                                        let mod = data.results.modules[i];
                                        let b = {};
                                        b.course_name = body.course_name;
                                        b.module_name = mod.name;
                                        getless(b, (err, results2) => {
                                            if (err) {
                                                console.log(err);
                                                return res.status(500).json({
                                                    success: 0,
                                                    message: 'database connection error'
                                                });
                                            }
                                            if (results2.length > 0) {
                                                for (let j = 0; j < results2.length; j++) {
                                                    body.lesson_id = results2[j].id;
                                                    data.results.modules[i].lessons[j] = {};
                                                    data.results.modules[i].lessons[j].name = results2[j].name;
                                                    data.results.modules[i].lessons[j].quiz = [];
                                                    get_lesson_quiz(body, (err, results6) => {
                                                        if (err) {
                                                            console.log(err);
                                                            return res.status(500).json({
                                                                success: 0,
                                                                message: 'database connection error'
                                                            });
                                                        }
                                                        for (let k = 0; k < results6.length; k++) {
                                                            data.results.modules[i].lessons[j].quiz.push(results6[k].quiz);
                                                        }
                                                        if (results2.length - 1 == j) {
                                                            return res.status(200).json({
                                                                course: data.results,
                                                                img: data.results[0].path,
                                                                course_status: body.course_status,
                                                                data: data.results.modules
                                                            })
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                })
            }
        })
    },
    update_course: (req, res) => {
        const body = req.body;
        update_course(body, (err, results) => {
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