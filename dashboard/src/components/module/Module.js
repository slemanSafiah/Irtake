import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Module() {
  const [course_name, setCourse_name] = useState("");
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");
  const [classname, setClassname] = useState("");
  const data = { course_name, name, sort, classname };
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const addmodule = (e) => {
    e.preventDefault();
    if (course_name == "" || name == "" || sort == "" || classname == "")
      alert("تأكد من إدخال جميع البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/module/add_module",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const deletemodule = (e) => {
    e.preventDefault();
    if (course_name == "" || classname == "")
      alert("تأكد من إدخال جميع البيانات");
    else {
      const data = { course_name, classname, name };
      axios({
        method: "post",
        url: "http://localhost:5000/api/module/delete_module",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الحذف بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };

  return (
    <section>
      <h2 className="text-right">أضف وحدة</h2>
      <form>
        <div className="form-row">
          <div className="col-md-3">
            {" "}
            <input
              type="text"
              className="form-control text-right"
              id="sort"
              placeholder="أدخل ترتيب الوحدة"
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
              id="name"
              placeholder="أدخل اسم الوحدة"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="course_name"
              placeholder="أدخل الكتاب"
              value={course_name}
              onChange={(event) => setCourse_name(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addmodule}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletemodule}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
