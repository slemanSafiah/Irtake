import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../AuthContext";

export default function Password() {
  const [newpass, setNewpass] = useState("");
  const [confirm, setConfirm] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;

  const editpass = (e) => {
    console.log(newpass);
    const data = { newpass };
    if (newpass === confirm) {
      e.preventDefault();
      axios({
        method: "put",
        url: "http://localhost:5000/api/admin/update_password",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم تغيير كلمة السر بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أثناء تغيير كلمة السر أعد المحاولة");
        });
    } else {
      alert("كلمة السر خطأ");
    }
  };
  return (
    <section>
      <h2 className="text-right">تغيير كلمة السر</h2>
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
