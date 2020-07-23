const {
    create,
    getMarksp,
    setChecked,
    getStatus,
    getCourse_id,
    getModule_id
} = require('./module_marks.services');

module.exports = {
    add_mark: (req, res) => {
        const body = req.body;
        getCourse_id(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.course_id = results1[0].id;
            getModule_id(body, (err, results2) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                body.module_id = results2[0].id;
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