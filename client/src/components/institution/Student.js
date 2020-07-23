import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Student() {
  const [name, setName] = useState("");
  const [mobil_number, setMobil_number] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst_name = authContext.inst;

  const data = { name, inst_name, mobil_number };

  const addstudent = (e) => {
    e.preventDefault();
    if (name == "" || mobil_number == "" || mobil_number.length < 9)
      alert("تأكد كم ملأ البيانات بالشكل الصحيح");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/student/add_student",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم إضافة طالب بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const deletestudent = (e) => {
    e.preventDefault();
    if (mobil_number.length > 10) alert("أدخل رقم الموبايل بشكل صحيح");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/student/delete_student",
        data: { mobil_number },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الحذف بالشكل الصحيح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحولة");
        });
    }
  };

  return (
    <section className="container background shadow-lg rounded">
      <h2 className="text-right pt-5">أضف طالب</h2>
      <div className="col-md-1">
        <Link to="/institution">
          <i className="fas fa-arrow-up	fa-2x icon"></i>{" "}
        </Link>
      </div>{" "}
      <form>
        <div className="form-row">
          <div className="form-group col-md-4"></div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل الاسم"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="mobil_number"
              placeholder="أدخل رقم موبايل الطالب"
              value={mobil_number}
              onChange={(event) => setMobil_number(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addstudent}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletestudent}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
