const {
    addFile,
    deleteFile,
    getFile,
    getFiles,
    addSection,
    getIds
} = require('./files.services');

module.exports = {
    addFile: (req, res) => {
        const body = req.body;
        addFile(body, (err, results) => {
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
    addSection: (req, res) => {
        const body = req.body;
        getIds(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results1.length > 0) {
                body.lesson_id = results1[0].id;
                body.module_id = results1[0].module_id;
                body.course_id = results1[0].course_id;
                addSection(body, (err, results) => {
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
    getFile: (req, res) => {
        const body = req.body;
        getFile(body, (err, results) => {
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
    getFiles: (req, res) => {
        getFiles(null, (err, results) => {
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
    deleteFile: (req, res) => {
        const body = req.body;
        deleteFile(body, (err, results) => {
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
}