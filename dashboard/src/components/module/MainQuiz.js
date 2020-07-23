import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";
export default function MainQuiz() {
  const [quiz, setQuiz] = useState("");
  const [classname, setClassname] = useState("");
  const [course_name, setCourse_name] = useState("");
  const [module_name, setModule_name] = useState("");
  const [hard, setHard] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst = 0;
  const data = { classname, quiz, course_name, module_name, hard, inst };

  const addbook = (e) => {
    e.preventDefault();
    if (
      course_name == "" ||
      classname == "" ||
      quiz == "" ||
      module_name == "" ||
      hard == ""
    )
      alert("تأكد من ملأ جميع الحقول");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_module/add_exam",
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم إضافة اختبار الوحدة بنجاح");
          setClassname("");
          setCourse_name("");
          setQuiz("");
          setModule_name("");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء إضافة اختبار الوحدة أعد المحاولة");
        });
    }
  };
  const deletetype = (e) => {
    if (course_name == "" || module_name == "" || classname == "" || quiz == "")
      alert("تأكد من ملأ جميع البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_module/delete_exam",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم حذف اختبار الوحدة بنجاح");
          setClassname("");
          setCourse_name("");
          setQuiz("");
          setModule_name("");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء حذف اختبار الوحدة أعد المحاولة");
        });
    }
  };

  return (
    <form>
      <h2 className="text-right"> أضف اختبار لوحدة </h2>
      <div className="form-row">
        <div className="col-md-6"></div>
        <div className="form-group col-md-6">
          <div className="text-right ">
            {" "}
            <h5> :صعوبة السؤال</h5>
            <label className="radio-inline mr-2">
              <input
                type="radio"
                name="optradio"
                value="3"
                className="mr-2"
                onChange={(event) => setHard(event.target.value)}
              />
              سهل
            </label>
            <label className="radio-inline mr-2">
              <input
                type="radio"
                name="optradio"
                value="2"
                className="mr-2"
                onChange={(event) => setHard(event.target.value)}
              />
              متوسط
            </label>
            <label className="radio-inline mr-2">
              <input
                type="radio"
                name="optradio"
                value="1"
                className="mr-2"
                onChange={(event) => setHard(event.target.value)}
              />
              صعب
            </label>
            <label className="radio-inline ">
              <input
                type="radio"
                name="optradio"
                value="4"
                className=""
                onChange={(event) => setHard(event.target.value)}
              />
              خبير{" "}
            </label>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-3">
          <input
            type="text"
            className="form-control text-right"
            id="quiz"
            placeholder="أدخل اسم الاختبار"
            value={quiz}
            onChange={(event) => setQuiz(event.target.value)}
          />
        </div>
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
            name="course_name"
            placeholder="أدخل اسم الكتاب"
            value={course_name}
            onChange={(event) => setCourse_name(event.target.value)}
          />
        </div>
        <div className="form-group col-md-3">
          <input
            type="text"
            className="form-control text-right"
            id="quiz"
            placeholder="أدخل اسم الوحدة"
            value={module_name}
            onChange={(event) => setModule_name(event.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn" onClick={addbook}>
        <i className="fa fa-plus text-warning" aria-hidden="true"></i>
      </button>
      <button type="submit" className="btn" onClick={deletetype}>
        <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
      </button>
    </form>
  );
}
