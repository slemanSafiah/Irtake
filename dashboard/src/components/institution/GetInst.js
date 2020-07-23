import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Lesson() {
  const [inst, setInst] = useState([]);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const getinst = (e) => {
    e.preventDefault();

    axios({
      method: "get",
      url: "http://localhost:5000/api/inst/get_insts",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setInst([]);
        res.data.data.map((inst) => {
          setInst((items) => [...items, inst.name]);
        });
      })
      .catch((err) => {
        alert("حدث خطأ أعد المحاولة");
      });
  };

  return (
    <section>
      <h2 className="text-right">تصفح أسماء المعاهد</h2>
      <form>
        <div className="form-row">
          <div className="bg-white">
            {inst.map((inst) => {
              return <h2 key={inst}>{inst}</h2>;
            })}
          </div>
        </div>
        <button type="submit" className="btn" onClick={getinst}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
