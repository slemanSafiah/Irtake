import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";

export default function Section() {
  const [module_name, setModule_name] = useState("");
  const [module, setModule] = useState([]);
  const [classname, setClassname] = useState("");
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const getmodule = (e) => {
    e.preventDefault();
    if (module_name == "") alert("أدخل اسم الوحدة");
    else {
      axios({
        method: "post",
        url: "http://localhost:5000/api/module/get_modulesByName",
        data: { module_name, classname },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setModule([]);
          console.log(res);
          res.data.data.map((module) => {
            setModule((items) => [...items, module.name]);
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section>
      <h2 className="text-right">تصفح الوحدات</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-4"></div>
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
              name="mod_name"
              placeholder="أدخل اسم الكتاب"
              value={module_name}
              onChange={(event) => setModule_name(event.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="bg-white w-100">
            {module.map((mod) => {
              return <h2 key={mod.id}>{mod}</h2>;
            })}
          </div>
        </div>
        <button type="submit" className="btn" onClick={getmodule}>
          <i class="far fa-arrow-alt-circle-down fa-2x" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
