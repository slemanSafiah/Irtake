import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";
export default function Course() {
  const [name, setName] = useState("");
  const [classname, setClassname] = useState("");
  const data = { name, classname };
  let formData = new FormData();
  const authContext = useContext(AuthContext);
  const token = authContext.auth;

  const addbook = (e) => {
    console.log(data);
    e.preventDefault();
    if (name == "" || classname == "") alert("تأكد من ملأ جميع الحقول");
    else {
      formData.append("name", name);
      formData.append("classname", classname);
      console.log("asd", token);
      axios({
        method: "post",
        url: "http://localhost:5000/api/course/add_course",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم إضافة الكتاب بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء إضافة الكتاب أعد المحاولة");
        });
    }
  };
  const deletebook = (e) => {
    e.preventDefault();
    if (name == "") alert("أدخل اسم الكتاب");
    else {
      const data = { name, classname };
      axios({
        method: "post",
        url: `http://localhost:5000/api/course/delete_course`,
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم حذف الكتاب بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء حذف الكتاب أعد المحاولة ثانية");
        });
    }
  };

  return (
    <section>
      <h2 className="text-right">أضف كتاب</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={(e) => {
                const files = e.target.files;
                console.log(files);

                formData.append("file", files[0]);

                console.log(formData);
              }}
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
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              name="name"
              placeholder="أدخل اسم الكتاب"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addbook}>
          <i className="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletebook}>
          <i className="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
