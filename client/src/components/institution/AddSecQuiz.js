import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "./../../AuthContext";
import { Editor } from "@tinymce/tinymce-react";

export default function AddSecQuiz() {
  const [type, setType] = useState("");
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [ans1, setans1] = useState("");
  const [ans2, setans2] = useState("");
  const [ans3, setans3] = useState("");
  const [ans4, setans4] = useState("");
  const [module_name, setmodule_name] = useState("");
  const [sort, setsort] = useState("");
  const [course_name, setcourse_name] = useState("");
  const [lesson_name, setlesson_name] = useState("");
  const [section_name, setsection_name] = useState("");
  const [hint, setHint] = useState("");
  const [hintAns1, sethintAns1] = useState("");
  const [hintAns2, sethintAns2] = useState("");
  const [hintAns3, sethintAns3] = useState("");
  const [classname, setClassname] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst = authContext.inst;
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setQuestion(content);
  };
  const data = {
    answer,
    hint,
    hintAns1,
    hintAns2,
    hintAns3,
    type,
    question,
    section_name,
    ans1,
    ans2,
    ans3,
    ans4,
    sort,
    course_name,
    inst,
    module_name,
    lesson_name,
    classname,
    inst,
  };
  const addtype = (e) => {
    e.preventDefault();

    console.log(data);
    if (
      type == 4 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        section_name == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 3 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        section_name == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 5 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        question == "" ||
        section_name == "" ||
        ans1 == "" ||
        ans2 == "" ||
        ans3 == "" ||
        ans4 == "" ||
        hintAns1 == "" ||
        hintAns2 == "" ||
        hintAns3 == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 1 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        section_name == "" ||
        answer == "" ||
        question == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else if (
      type == 2 &&
      (course_name == "" ||
        module_name == "" ||
        lesson_name == "" ||
        section_name == "" ||
        question == "" ||
        sort == "")
    )
      alert("تأكد من ملأ جميع الحقول");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_section/add_quiz",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم إضافة اختبار للفقرة بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const deletetype = (e) => {
    e.preventDefault();
    if (
      course_name == "" ||
      lesson_name == "" ||
      module_name == "" ||
      section_name == ""
    )
      alert("تأكد من ملأ جميع البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_section/delete_quiz",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم  حذف اختبار الفقرة بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء حذف الفقرة أعد المحاولة ثانية");
        });
    }
  };

  return (
    <section className="container shadow-lg rounded background">
      <h2 className="text-right pt-5"> أضف سؤال لفقرة</h2>
      <div className="col-md-1">
        <Link to="/institution">
          <i className="fas fa-arrow-up	fa-2x icon"></i>{" "}
        </Link>
      </div>{" "}
      <form>
        <div className="form-row">
          <div className="col-md-6"></div>
          <div className="form-group col-md-6">
            <div className="text-right ">
              {" "}
              <h5 className="mt-3"> :نوع السؤال</h5>
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
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
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
                  placeholder="أدخل عنوان الفقرة"
                  value={section_name}
                  onChange={(event) => setsection_name(event.target.value)}
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
                <Editor
                  initialValue="<p>أدخل السؤال</p>"
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
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setsort(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setmodule_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="course"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setcourse_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setlesson_name(event.target.value)}
                />
              </div>
            </div>
          </>
        ) : type == 2 ? (
          <>
            <div className="form-row mt-3">
              <div className=" col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setsort(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setmodule_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="course"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setcourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل عنوان الفقرة"
                  value={section_name}
                  onChange={(event) => setsection_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setlesson_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Editor
                  initialValue="<p>أدخل السؤال</p>"
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
              <div className="form-group col-md-3"></div>

              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل عنوان الفقرة"
                  value={section_name}
                  onChange={(event) => setsection_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                {" "}
                <Editor
                  initialValue="<p>أدخل السؤال</p>"
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
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setsort(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setmodule_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="course"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setcourse_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setlesson_name(event.target.value)}
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
                  onChange={(event) => setans4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثالث"
                  value={ans3}
                  onChange={(event) => setans3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثاني"
                  value={ans2}
                  onChange={(event) => setans2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الأول"
                  value={ans1}
                  onChange={(event) => setans1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : type == 4 ? (
          <>
            <div className="form-row mt-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setsort(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setmodule_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="course"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setcourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل عنوان الفقرة"
                  value={section_name}
                  onChange={(event) => setsection_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setlesson_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Editor
                  initialValue="<p>أدخل السؤال</p>"
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
                  onChange={(event) => setans4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="  أدخل الاختيار الثالث الخاطئ"
                  value={ans3}
                  onChange={(event) => setans3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الثاني الخاطئ"
                  value={ans2}
                  onChange={(event) => setans2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل الاختيار الأول الخاطئ"
                  value={ans1}
                  onChange={(event) => setans1(event.target.value)}
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
                  onChange={(event) => sethintAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الثاني"
                  value={hintAns2}
                  onChange={(event) => sethintAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الأول"
                  value={hintAns1}
                  onChange={(event) => sethintAns1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : type == 5 ? (
          <>
            <div className="form-row mt-3">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل الصف"
                  value={classname}
                  onChange={(event) => setClassname(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل رقم السؤال"
                  value={sort}
                  onChange={(event) => setsort(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  id="module"
                  placeholder="أدخل اسم الوحدة"
                  value={module_name}
                  onChange={(event) => setmodule_name(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                {" "}
                <input
                  type="text"
                  className="form-control text-right"
                  name="course"
                  placeholder="أدخل اسم الكتاب"
                  value={course_name}
                  onChange={(event) => setcourse_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row mt-3">
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3"></div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل عنوان الفقرة"
                  value={section_name}
                  onChange={(event) => setsection_name(event.target.value)}
                />
              </div>
              <div className="form-group col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  placeholder="أدخل اسم الدرس"
                  value={lesson_name}
                  onChange={(event) => setlesson_name(event.target.value)}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-12">
                <Editor
                  initialValue="<p>أدخل السؤال</p>"
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
                  onChange={(event) => setans4(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="  أدخل جواب الاختيار الثالث"
                  value={ans3}
                  onChange={(event) => setans3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الثاني "
                  value={ans2}
                  onChange={(event) => setans2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل جواب الاختيار الأول "
                  value={ans1}
                  onChange={(event) => setans1(event.target.value)}
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
                  onChange={(event) => sethintAns3(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل  الاختيار الثاني"
                  value={hintAns2}
                  onChange={(event) => sethintAns2(event.target.value)}
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control text-right"
                  name="name"
                  placeholder="أدخل  الاختيار الأول"
                  value={hintAns1}
                  onChange={(event) => sethintAns1(event.target.value)}
                />
              </div>{" "}
            </div>
          </>
        ) : (
          ""
        )}

        <button type="submit" className="btn" onClick={addtype}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletetype}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
