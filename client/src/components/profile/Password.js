import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "./../../AuthContext";

export default function Password() {
  const [newpass, setNewpass] = useState("");
  const [confirm, setConfirm] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const mobil_number = authContext.number;

  const editpass = (e) => {
    e.preventDefault();
    if (newpass === confirm) {
      e.preventDefault();
      const data = { newpass, mobil_number };
      axios({
        method: "put",
        url: "http://localhost:5000/api/users/change_password",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log("DFDFDFDFD", res);
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    } else {
      alert("كلمة السر خطأ");
    }
  };
  return (
    <section className="container background shadow-lg rounded">
      <h2 className="text-right pt-2 mb-5">تغيير كلمة السر</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4"></div>

          <div className="form-group col-md-4">
            <input
              type="password"
              className="form-control text-right"
              name="confirm"
              placeholder="أعد كتابة كلمة السر"
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="password"
              className="form-control text-right"
              id="newpass"
              placeholder="أدخل كلمة السر الجديدة"
              value={newpass}
              onChange={(event) => setNewpass(event.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn " onClick={editpass}>
          <i class="far fa-edit	text-success" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
