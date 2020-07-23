import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Section() {
  const [inst_name, setInst_name] = useState("");
  const [book, setBook] = useState("");
  const [stu, setStu] = useState([]);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const data = { inst_name, book };

  const getstu = (e) => {
    e.preventDefault();

    axios({
      method: "GET",
      url: "http://localhost:5000/api/users/get_users",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setStu([]);
        res.data.data.map((stu) => {
          setStu((items) => [...items, stu.name]);
          console.log(stu);
        });
      })
      .catch((err) => {
        alert("حدث خطأ أعد المحاولة ثانية");
      });
  };
  const getinst = (e) => {
    e.preventDefault();
    if (inst_name == "") alert("أدخل اسم المعهد");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/std_course/get_course_in_inst",
        data: { inst_name },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          setStu([]);
          res.data.data.map((stu) => {
            setStu((items) => [...items, stu.std_num]);
          });
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const getinstbook = (e) => {
    e.preventDefault();
    if (inst_name == "") alert("أدخل اسم المعهد");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/std_course/get_std_in_course_inst",
        data: { inst_name, book },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res);
          setStu([]);
          res.data.data.map((stu) => {
            setStu((items) => [...items, stu.std_num]);
          });
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  return (
    <section>
      <h2 className="text-right">تصفح الطلاب</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4"></div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="book"
              placeholder="أدخل اسم الكتاب"
              value={book}
              onChange={(event) => setBook(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="inst_name"
              placeholder="أدخل اسم المعهد"
              value={inst_name}
              onChange={(event) => setInst_name(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="bg-white w-100">
            {stu.map((inst) => {
              return <h2 key={inst}>{inst}</h2>;
            })}
          </div>
        </div>
        <button type="submit" className="btn" onClick={getstu}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true">
            جميع الطلاب
          </i>
        </button>
        <button type="submit" className="btn" onClick={getinstbook}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true">
            طلاب كتاب لمعهد
          </i>
        </button>
        <button type="submit" className="btn" onClick={getinst}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true">
            طلاب معهد
          </i>
        </button>
      </form>
    </section>
  );
}
