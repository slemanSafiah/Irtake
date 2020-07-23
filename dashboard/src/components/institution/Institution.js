import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Institution() {
  const [name, setName] = useState("");
  const [mobil_number, setMobil_number] = useState("");
  const [email, setEmail] = useState("");
  const data = { name, mobil_number, email };
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const addInstitution = (e) => {
    e.preventDefault();
    if (name == "" || mobil_number == "" || email == "")
      alert("تاكد من ملأ جميع الحقول");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/inst/create_inst1",
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
    }
  };
  const deleteInstitution = (e) => {
    e.preventDefault();
    if (name == "") alert("أدخل اسم المعهد");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/inst/delete_inst",
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
  const editInstitution = (e) => {
    e.preventDefault();
    if (name == "" || mobil_number == "" || email == "")
      alert("تاكد من ملأ جميع الحقول");
    else {
      axios({
        method: "put",
        url: "http://localhost:5000/api/inst/update_inst",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم التعديل بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  return (
    <section>
      <h2 className="text-right">أضف معهد</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="name"
              placeholder="أدخل اسم المعهد"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="mobil_number"
              placeholder="أدخل رقم الهاتف"
              value={mobil_number}
              onChange={(event) => setMobil_number(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="email"
              className="form-control text-right"
              name="email"
              placeholder="أدخل إيميل المعهد"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn" onClick={addInstitution}>
          <i class="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn " onClick={editInstitution}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
        <button type="submit" className="btn" onClick={deleteInstitution}>
          <i class="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
