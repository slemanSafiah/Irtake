const {
    create,
    getSections,
    deleteSection,
    editSections,
    get_quiz_sp,
    getIds,
    getStatus,
    getCourseStatus
} = require('./section.services');

module.exports = {
    getSections: (req, res) => {
        const body = req.body;
        body.book = body.course;
        getSections(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            console.log(results);
            if (results.length > 0) {
                body.module_name = results[0].module;
                body.lesson_name = body.lesson;
                body.course_name = body.book;
                for (let i = 0; i < results.length; i++) {
                    body.section_name = results[i].title;
                    results[i].quiz = [];
                    get_quiz_sp(body, (err, results1) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).json({
                                success: 0,
                                message: 'database connection error'
                            })
                        }
                        results[i].quiz = results1;
                        if (i == results.length - 1) {
                            return res.status(200).json({
                                success: 1,
                                status: body.status,
                                course_status: body.available,
                                data: results
                            })
                        }
                    })
                }
            }
        })
    },
    deleteSection: (req, res) => {
        const body = req.body;
        deleteSection(body, (err, results) => {
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
    editSections: (req, res) => {
        const body = req.body;
        editSections(body, (err, results) => {
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