const {
    create,
    getMarksp,
    setChecked,
    getStatus,
    getids
} = require('./lesson_marks.services');

module.exports = {
    add_mark: (req, res) => {
        const body = req.body;
        getids(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
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
        })
    },
    getMarksp: (req, res) => {
        const body = req.body;
        getMarksp(body, (err, results) => {
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
    setChecked: (req, res) => {
        const body = req.body;
        body.status = 1
        setChecked(body, (err, results) => {
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
    getStatus: (req, res) => {
        const body = req.body;
        getStatus(body, (err, results) => {
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