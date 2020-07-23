const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into std_course (course_id ,course_name ,inst_name , std_number , year , month , day ,available) values (?,?,?,?,?,?,?,?)`,
            [
                data.course_id,
                data.course_name,
                data.inst_name,
                data.std_number,
                data.year,
                data.month,
                data.day,
                data.available
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getAll: (data, callback) => {
        pool.query(
            `select * from std_course`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_courses_inst: (data, callback) => {
        pool.query(
            `select * from student where inst_name = ?`,
            [
                data.inst_name,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_inst_course: (data, callback) => {
        pool.query(
            `select inst_name , std_number , day , month , year, available from std_course where course_name = ?`,
            [
                data.course_name,
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_stds_course: (data, callback) => {
        pool.query(
            `select std_number, inst_name, day , month , year, available from std_course where course_name = ?`,
            [
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_stds_course_inst: (data, callback) => {
        pool.query(
            `select std_number, day , month , year, available from std_course where course_name = ? and inst_name=?`,
            [
                data.book,
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getId: (data, callback) => {
        pool.query(
            `select id from institution where name=?`,
            [
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    deleteOne: (data, callback) => {
        pool.query(
            `delete from std_course where course_name = ? and std_number = ? and inst_name=?`,
            [
                data.course_name,
                data.std_number,
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    updateAvailable: (data, callback) => {
        pool.query(
            `update std_course set available = ? where std_number = ? and course_name = ? and inst_name=?`,
            [
                data.available,
                data.std_number,
                data.course,
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_available: (data, callback) => {
        pool.query(
            `select available from std_course where course_name = ? and inst_name = ? and std_number = ?`,
            [
                data.course_name,
                data.inst_name,
                data.std_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_course_std: (data, callback) => {
        pool.query(
            `select DISTINCT  course_name from std_course where std_number=?`,
            [
                data.std_number
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    get_end_date: (data, callback) => {
        pool.query(
            `select * from std_course where std_number = ? and inst_name = ? and course_name = ?`,
            [
                data.std_number,
                data.inst_name,
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getCourseId: (data, callback) => {
        pool.query(
            `select id from course where name = ?`,
            [
                data.course_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getStdId: (data, callback) => {
        pool.query(
            `select mobil_number from student where name = ?`,
            [
                data.name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    getInstId: (data, callback) => {
        pool.query(
            `select id from institution where name = ?`,
            [
                data.inst_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
}