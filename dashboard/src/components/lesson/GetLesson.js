import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Lesson() {
  const [course_name, setCourse_name] = useState("");
  const [module_name, setModule_name] = useState("");
  const [classname, setClassname] = useState("");
  const [lesson, setLesson] = useState([]);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const data = { module_name, course_name, classname };

  const getlesson = (e) => {
    e.preventDefault();
    axios({
      method: "get",
      url: "http://localhost:5000/api/lesson/get_lessons",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setLesson([]);
        res.data.data.map((lesson) => {
          setLesson((items) => [...items, lesson.name]);
        });
        console.log(lesson);
      })
      .catch((err) => {
        alert("حدث خطأ أعد المحاولة ثانية");
      });
  };

  const getless = (e) => {
    e.preventDefault();
    if (module_name == "" || course_name == "")
      alert("تأكد من ملأ جميع الحقول");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/lesson/get_less",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setLesson([]);
          console.log(res);
          res.data.data.map((lesson) => {
            setLesson((items) => [...items, lesson.name]);
          });
          console.log(res);
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  return (
    <section>
      <h2 className="text-right">تصفح أسماء الدروس</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              placeholder="أدخل اسم الوحدة"
              value={module_name}
              onChange={(event) => setModule_name(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="coursename"
              placeholder="أدخل اسم الكتاب"
              value={course_name}
              onChange={(event) => setCourse_name(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
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
          <div className="bg-white w-100">
            {lesson.map((lesson) => {
              return <h2 key={lesson}>{lesson}</h2>;
            })}
          </div>
        </div>
        <button type="submit" className="btn" onClick={getlesson}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true"></i>
          جميع الدروس
        </button>
        <button type="submit" className="btn" onClick={getless}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true"></i>
          درس محدد
        </button>
      </form>
    </section>
  );
}
