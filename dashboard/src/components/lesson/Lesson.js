import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Lesson() {
  const [course_name, setCourse_name] = useState("");
  const [module_name, setModule_name] = useState("");
  const [sort, setSort] = useState("");
  const [name, setName] = useState("");
  const [classname, setClassname] = useState("");
  const data = { course_name, module_name, name, sort, classname };
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const addlesson = (e) => {
    e.preventDefault();
    if (course_name == "" || module_name == "" || name == "" || sort == "")
      alert("تأكد م إدخال جميع البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/lesson/add_lesson",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الإضافة بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const deletelesson = (e) => {
    e.preventDefault();
    if (name == "") alert("تاكد من إدخال جميع البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/lesson/delete_lesson",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الحذف بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة ثانية");
        });
    }
  };
  const editlesson = (e) => {
    e.preventDefault();
    if (course_name == "" || module_name == "" || name == "" || sort == "")
      alert("تأكد م إدخال جميع البيانات");
    else {
      axios({
        method: "put",
        url: "http://localhost:5000/api/lesson/update_lesson",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم التعديل بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة ");
        });
    }
  };
  return (
    <section>
      <h2 className="text-right">أضف درس</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل اسم الدرس"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="sort"
              placeholder="أدخل رقم الدرس"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
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
              name="course_name"
              placeholder="أدخل اسم الكتاب"
              value={course_name}
              onChange={(event) => setCourse_name(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          {" "}
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
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

        <button type="submit" className="btn" onClick={addlesson}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editlesson}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deletelesson}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
