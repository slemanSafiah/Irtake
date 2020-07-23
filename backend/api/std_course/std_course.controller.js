const {
    create,
    updateAvailable,
    get_courses_inst,
    get_stds_course,
    get_stds_course_inst,
    get_inst_course,
    getAll,
    get_course_std,
    deleteOne,
    get_available,
    get_end_date,
    getCourseId,
    getId,
    getStdId,
    getInstId
} = require('./std_course.services');

module.exports = {
    add_one: (req, res) => {
        const body = req.body;
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        if (month == 12) {
            month = 1;
            year++;
        } else {
            month++;
        }
        body.day = day;
        body.month = month;
        body.year = year;
        getCourseId(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.course_id = results1[0].id;
            getInstId(body, (err, results2) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                body.inst_num = results2[0].id;
                console.log(body);
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

            });
        });


    },
    get_all: (req, res) => {
        getAll(null, (err, results) => {
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
    get_stds_course: (req, res) => {
        const body = req.body;
        get_stds_course(body, (err, results) => {
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
    get_stds_course_inst: (req, res) => {
        const body = req.body;
        getId(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.inst_name = results1[0].id
            console.log(body)
            get_stds_course_inst(body, (err, results) => {
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
        })
    },
    get_courses_inst: (req, res) => {
        const body = req.body;
        getId(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            if (results1.length > 0) {
                body.inst_name = results1[0].id;
                get_courses_inst(body, (err, result) => {
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
        })
    },
    get_inst_course: (req, res) => {
        const body = req.body;
        get_inst_course(body, (err, result) => {
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
    },
    get_course_std: (req, res) => {
        const body = req.body;
        get_course_std(body, (err, result) => {
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
    },
    delete_one: (req, res) => {
        const body = req.body;
        deleteOne(body, (err, results) => {
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
    updateAvailableOn: (req, res) => {
        const body = req.body;
        body.available = 1;
        getStdId(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.std_number = results1[0].mobil_number;
            getInstId(body, (err, results2) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                body.inst_name = results2[0].id;
                console.log(body);
                updateAvailable(body, (err, results) => {
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
            })
        })
    },
    updateAvailableOff: (req, res) => {
        const body = req.body;
        body.available = 0;
        getStdId(body, (err, results1) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'database connection error'
                });
            }
            body.std_number = results1[0].mobil_number;
            getInstId(body, (err, results2) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: 'database connection error'
                    });
                }
                body.inst_name = results2[0].id;
                console.log(body);
                updateAvailable(body, (err, results) => {
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
            })
        })
    },
    get_available: (req, res) => {
        const body = req.body;
        get_available(body, (err, result) => {
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
    },
    get_end_date: (req, res) => {
        const body = req.body;
        get_end_date(body, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: 'databse connection error'
                });
            }
            if (result.length == 0) {
                return res.status(501).json({
                    success: 0,
                    message: 'you are not regiester yet'
                });
            }
            let day = new Date().getDate();
            let month = new Date().getMonth() + 1;
            let year = new Date().getFullYear();
            if (result[0].year > year) {
                return res.status(502).json({
                    success: 0,
                    message: 'you are not regiester yet until this date'
                });
            }
            if (result[0].month > month) {
                return res.status(500).json({
                    success: 0,
                    message: 'you are not regiester yet m'
                });
            }
            if (result[0].day > day) {
                return res.status(500).json({
                    success: 0,
                    message: 'you are not regiester yet d'
                });
            }
            return res.status(200).json({
                success: 1,
                data: true
            })
        })
    }
}