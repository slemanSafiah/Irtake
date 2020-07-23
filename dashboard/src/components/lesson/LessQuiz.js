import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";
import { Editor } from "@tinymce/tinymce-react";

export default function LessQuiz() {
  const [type, setType] = useState("");
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, setAns2] = useState("");
  const [ans3, setAns3] = useState("");
  const [ans4, setAns4] = useState("");
  const [sort, setSort] = useState("");
  const [course_name, setCourse_name] = useState("");
  const [module_name, setModule_name] = useState("");
  const [lesson_name, setLesson_name] = useState("");
  const [hint, setHint] = useState("");
  const [hintAns1, setHintAns1] = useState("");
  const [hintAns2, setHintAns2] = useState("");
  const [hintAns3, setHintAns3] = useState("");
  const [classname, setClassname] = useState("");
  const [quiz, setQuiz] = useState("");

  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setQuestion(content);
  };
  const inst = 0;
  const data = {
    type,
    question,
    answer,
    hint,
    inst,
    ans1,
    ans2,
    ans3,
    ans4,
    lesson_name,
    hintAns1,
    hintAns2,
    hintAns3,
    course_name,
    module_name,
    sort,
    classname,
    quiz,
  };
  const addquiz = (e) => {
    console.log(data);
    e.preventDefault();
    if (
      type == 4 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        quiz == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 3 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        quiz == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 5 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        hintAns1 == "" ||
        hintAns2 == "" ||
        hintAns3 == "" ||
        quiz == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 1 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        answer == "" ||
        quiz == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 2 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        quiz == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_lesson/add_quiz",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم إضافة اختبار لدرس بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء الإضافة أعد المحاولة");
        });
    }
  };
  const deletequiz = (e) => {
    e.preventDefault();
    e.preventDefault();
    if (
      lesson_name == "" ||
      module_name == "" ||
      course_name == "" ||
      quiz == "" ||
      sort == ""
    )
      alert("تأكد من ملأ جميع البيانات");
    else {
      axios.delete(
        `/${lesson_name}&${module_name}&${course_name}&${sort}&${inst}`
      );
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_lesson/delete_quiz",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الحذف بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء الحذف أعد المحاولة");
        });
    }
  };

  return (
    <section className="container background">
      <h2 className="text-right mt-3"> أضف سؤال لاختبار لدرس</h2>

      <form>
        <div className="form-row">
          <div className="col-md-6"></div>
          <div className="form-group col-md-6">
            <div className="text-right ">
              {" "}
              <h5> :نوع السؤال</h5>
              <label className="radio-inline mr-2">
                <input
                  type="radio"
                  name="optradio"
                  value="4"
                  className="mr-2"
                  onChange={(event) => setType(event.target.value)}
                />
                اختر الإجابة
              </label>
              <label className="radio-inline mr-2">
                <input
                  type="radio"
                  name="optradio"
                  value="3"
                  className="mr-2"
                  onChange={(event) => setType(event.target.value)}
                />
                رتب الجمل
              </label>
              <label className="radio-inline mr-2">
                <input
                  type="radio"
                  name="optradio"
                  value="1"
                  className="mr-2"
                  onChange={(event) => setType(event.target.value)}
                />
                أدخل الإجابة
              </label>
              <label className="radio-inline ">
                <input
                  type="radio"
                  name="optradio"
                  value="2"
                  className="mr-2"
                  onChange={(event) => setType(event.target.value)}
                />
                إجابة بصورة{" "}
              </label>
              <label className="radio-inline ">
                <input
                  type="radio"
                  name="optradio"
                  value="5"
                  className="ml-2"
                  onChange={(event) => setType(event.target.value)}
                />
                وصل
              </label>
            </div>
          </div>
        </div>

        {type == 1 ? (
          <>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="classnumber"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setLesson_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module_name"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setModule_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل تلميح الجواب"
                  value={hint}
                  onChange={(event) => setHint(event.target.value)}
                />
              </div>

              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل الجواب الصحيح"
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="Course_name"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setCourse_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="quiz"
                  placeholder="أدخل اسم الاختبار"
                  value={quiz}
                  onChange={(event) => setQuiz(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Editor
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
          </>
        ) : type == 2 ? (
          <>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setLesson_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module_name"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setModule_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="classnumber"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="quiz"
                  placeholder="أدخل اسم الاختبار"
                  value={quiz}
                  onChange={(event) => setQuiz(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="Course_name"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setCourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
                <Editor
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
          </>
        ) : type == 3 ? (
          <>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="classnumber"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setLesson_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module_name"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setModule_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="quiz"
                  placeholder="أدخل اسم الاختبار"
                  value={quiz}
                  onChange={(event) => setQuiz(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="Course_name"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setCourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
                <Editor
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الرابع"
                  value={ans4}
                  onChange={(event) => setAns4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثالث"
                  value={ans3}
                  onChange={(event) => setAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثاني"
                  value={ans2}
                  onChange={(event) => setAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الأول"
                  value={ans1}
                  onChange={(event) => setAns1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : type == 4 ? (
          <>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="classnumber"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setLesson_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module_name"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setModule_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="quiz"
                  placeholder="أدخل اسم الاختبار"
                  value={quiz}
                  onChange={(event) => setQuiz(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="Course_name"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setCourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
                <Editor
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الصحيح"
                  value={ans4}
                  onChange={(event) => setAns4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="   أدخل الاختيار الثالث الخاطئ"
                  value={ans3}
                  onChange={(event) => setAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثاني الخاطئ"
                  value={ans2}
                  onChange={(event) => setAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder=" أدخل الاختيار الأول الخاطئ"
                  value={ans1}
                  onChange={(event) => setAns1(event.target.value)}
                />
              </div>{" "}
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الثالث"
                  value={hintAns3}
                  onChange={(event) => setHintAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الثاني"
                  value={hintAns2}
                  onChange={(event) => setHintAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الأول"
                  value={hintAns1}
                  onChange={(event) => setHintAns1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : type == 5 ? (
          <>
            <div className="form-row mt-3">
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="classnumber"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="lesson_name"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setLesson_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module_name"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setModule_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3"></div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="quiz"
                  placeholder="أدخل اسم الاختبار"
                  value={quiz}
                  onChange={(event) => setQuiz(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="Course_name"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setCourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-12">
                <Editor
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الإضافي"
                  value={ans4}
                  onChange={(event) => setAns4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="   أدخل جواب الاختيار الثالث "
                  value={ans3}
                  onChange={(event) => setAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الثاني "
                  value={ans2}
                  onChange={(event) => setAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder=" أدخل جواب الاختيار الأول "
                  value={ans1}
                  onChange={(event) => setAns1(event.target.value)}
                />
              </div>{" "}
            </div>
            <div className="form-row mt-3">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثالث"
                  value={hintAns3}
                  onChange={(event) => setHintAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخلالاختيار الثاني"
                  value={hintAns2}
                  onChange={(event) => setHintAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الأول"
                  value={hintAns1}
                  onChange={(event) => setHintAns1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : (
          ""
        )}
        <button type="submit" className="btn" onClick={addquiz}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletequiz}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
