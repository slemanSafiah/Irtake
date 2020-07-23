const {
  add_course,
  getCourses,
  getCourseByName,
  deleteCourse,
  update_course,
  get_course_details,
} = require("./course.controller");

const { checkToken } = require('../../auth/token_validation');
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

//set storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, path.join(__dirname + "/upload/"));
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}_${path.extname(file.originalname)}`);
  },
});

//init upload
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000,
  },
});

router.post(
  "/add_course",
  checkToken,
  upload.single("file"),
  (req, res, next) => {
    req.body.path = req.file.path;
    console.log(req.body);
    next();
  },
  add_course
);
router.get("/get_courses", getCourses);
router.post("/get_course", checkToken, getCourseByName);
router.post("/get_course_details", checkToken, get_course_details);
router.post("/delete_course", checkToken, deleteCourse);
router.put("/update_course", checkToken, update_course);

module.exports = router;
