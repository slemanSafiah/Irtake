import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Active() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [inst_name, setInst_name] = useState();
  const data = { name, course, inst_name };
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const enablestudent = (e) => {
    e.preventDefault();
    if (name == "" || course == "") alert("تأكد من ملأ البيانات");
    else {
      axios({
        method: "put",
        url: "http://localhost:5000/api/std_course/updateAvailableOn",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم تفعيل اشتراك الطالب بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const disablestudent = (e) => {
    e.preventDefault();

    axios({
      method: "put",
      url: "http://localhost:5000/api/std_course/updateAvailableOff",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h2 className="text-right">تفعيل/إلغاء تفعيل اشتراك</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل اسم الطالب"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل اسم المعهد"
              value={inst_name}
              onChange={(event) => setInst_name(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="institution"
              placeholder="أدخل اسم الكتاب"
              value={course}
              onChange={(event) => setCourse(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={enablestudent}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={disablestudent}>
          <i class="far fas fa-minus text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
