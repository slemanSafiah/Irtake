const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

const student_router = require('./api/student/student.router');
const user_router = require('./api/users/user.router');
const inst_router = require('./api/institution/inst.router');
const course_router = require('./api/course/course.router');
const module_router = require('./api/module/module.router');
const lesson_router = require('./api/lesson/lesson.router');
const section_router = require('./api/section/section.router');
const quiz_router = require('./api/quiz/quiz.router');
const admin_router = require('./api/admin/admin.router');
const std_course_router = require('./api/std_course/std_course.router');
const quiz_lesson_router = require('./api/quiz_lesson/quiz.router');
const quiz_module_router = require('./api/quiz_module/quiz.router');
const quiz_course_router = require('./api/quiz_course/quiz.router');
const module_marks_router = require('./api/module_marks/module_marks.router');
const lesson_marks_router = require('./api/lesson_marks/lesson_marks.router');
const files_router = require('./api/files/files.router');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({ secret: 'max', saveUninitialized: false, resave: false }));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept , Authorization ');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(201).json({})
    }
    next();
});
app.use('/api/student', student_router);
app.use('/api/users', user_router);
app.use('/api/inst', inst_router);
app.use('/api/course', course_router);
app.use('/api/module', module_router);
app.use('/api/lesson', lesson_router);
app.use('/api/section', section_router);
app.use('/api/quiz_section', quiz_router);
app.use('/api/admin', admin_router);
app.use('/api/std_course', std_course_router);
app.use('/api/quiz_lesson', quiz_lesson_router);
app.use('/api/quiz_module', quiz_module_router);
app.use('/api/quiz_course', quiz_course_router);
app.use('/api/module_marks', module_marks_router);
app.use('/api/lesson_marks', lesson_marks_router);
app.use('/api/files', files_router);
app.use('/module', express.static('upload/images'));

app.listen(5000, () => {
    console.log(`server started at port :5000`);
})
