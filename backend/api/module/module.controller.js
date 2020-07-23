const {
    create,
    getModules,
    deleteModule,
    getCourseIdByName,
    get_modulesByName
} = require('./module.services');

module.exports = {
    addModule: (req, res) => {
        const body = req.body;
        getCourseIdByName(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results.length > 0) {
                body.course_id = results[0].id;
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
                });
            }
        });
    },
    getModules: (req, res) => {
        getModules(null, (err, results) => {
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
    get_modulesByName: (req, res) => {
        const body = req.body;
        console.log(body);
        get_modulesByName(body, (err, results) => {
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
    deleteModule: (req, res) => {
        const body = req.body;
        deleteModule(body, (err, results) => {
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
    }
}