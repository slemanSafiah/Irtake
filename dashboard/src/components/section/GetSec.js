import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Section() {
  const [lesson, setLesson] = useState("");
  const [module, setModule] = useState("");
  const [book, setBook] = useState("");
  const [classname, setClassname] = useState();
  const [section, setSection] = useState([]);
  const data = { lesson, module, book };
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const getsec = (e) => {
    e.preventDefault();
    if (module == "") alert("تأكد من إدخال البيانات");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/section/get_sections",
        data: { module, book, lesson, classname },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setModule([]);
          console.log(res);
          res.data.data.map((section) => {
            setSection((items) => [...items, section.title]);
            setLesson('');
            setBook("");
            setClassname('');
            setModule("")
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
      <h2 className="text-right">تصفح الفقرات</h2>
      <form>
        <div className="form-row">
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
              id="lesson"
              placeholder="أدخل اسم الدرس"
              value={lesson}
              onChange={(event) => setLesson(event.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              name="book"
              placeholder="أدخل اسم الكتاب"
              value={book}
              onChange={(event) => setBook(event.target.value)}
            />
          </div>

          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="module"
              placeholder="أدخل اسم الوحدة"
              value={module}
              onChange={(event) => setModule(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="bg-white w-100">
            {section.map((sec) => {
              return <h2 key={sec.id}>{sec}</h2>;
            })}
          </div>
        </div>
        <button type="submit" className="btn" onClick={getsec}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
