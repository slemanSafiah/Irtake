const {
    create,
    getLessons,
    deleteLesson,
    updateLesson,
    getCourseIdByName,
    getmoduleIdByName,
    getless,
    getlessonSP
} = require('./lesson.services');

module.exports = {
    addLesson: (req, res) => {
        const body = req.body;
        console.log(body);
        getmoduleIdByName(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results.length > 0) {
                console.log(results);
                body.course_id = results[0].course_id
                body.module_id = results[0].id;
                create(body, (err, result) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            success: 0,
                            message: 'database connection error'
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        data: result
                    })
                })
            }
        });
    },
    getLessons: (req, res) => {
        getLessons(null, (err, results) => {
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
    getless: (req, res) => {
        const body = req.body;
        getless(body, (err, results) => {
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
    deleteLesson: (req, res) => {
        const body = req.body;
        deleteLesson(body, (err, results) => {
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
    updateLesson: (req, res) => {
        const body = req.body;
        updateLesson(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            })
        });
    },
    getlessonSP: (req, res) => {
        const body = req.body;
        getlessonSP(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            return res.status(200).json({
                success: 1,
                lesson_name: body.lesson_name,
                data: results
            })
        })
    },
}