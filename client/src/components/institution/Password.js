import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "./../../AuthContext";

export default function Password() {
  const [newpass, setNewpass] = useState("");
  const [confirm, setConfirm] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const mobil_number = authContext.inst;
  const editpass = (e) => {
    const data = {
      password: newpass,
      mobil_number,
    };
    console.log(data);
    if (newpass === confirm) {
      e.preventDefault();
      axios({
        method: "put",
        url: "http://localhost:5000/api/inst/change_password",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم تغيير كلمة السر بالشكل الصحيح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء تغيير كلمة السر أعد المحاولة");
        });
    } else {
      alert("كلمة السر خطأ");
    }
  };
  return (
    <section className="container shadow-lg rounded background">
      <h2 className="text-right pt-5">تغيير كلمة السر</h2>
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
