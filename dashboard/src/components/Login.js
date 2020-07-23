import React, { useContext, useState } from "react";
import * as Yup from "yup";
import login from "./../login.svg";
import axios from "axios";
import { AuthContext } from "./../AuthContext";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

function LoginForm() {
  let history = useHistory();

  const authContext = useContext(AuthContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      axios
        .post("http://localhost:5000/api/admin/login_admin", values)
        .then((res) => {
          if (res.data.success == 0) alert("كلمة السر خاطئة أعد المحاولة");
          else {
            const token = res.data.token;
            console.log(res);
            localStorage.setItem("token", token);
            localStorage.setItem("email", values.email);
            console.log(token, values.email);
            authContext.setAuth(token);

            history.push("/");
          }
        })
        .catch((err) => {
          alert("حدث خطأ أثناء تسجيل الدخول أعد المحاولة ثانية");
        });

      this.formik.resetForm({});
    },
  });
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6 login  d-flex justify-content-center rounded">
          <form onSubmit={formik.handleSubmit}>
            <span className="d-flex justify-content-center mt-4">
              <i className="fas fa-user-graduate mr-3 fa-2x icon"></i>
              <i className="fas fa-lock fa-2x icon"></i>
            </span>

            <h1 className="m-3">تسجيل دخول</h1>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="أدخل بريدك الالكتروني"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mb-5 shadow-sm text-right bg-light form-control form-control-lg"
              />
              {formik.touched.email && formik.errors.email ? (
                <h6 className="text-danger">{formik.errors.email}</h6>
              ) : null}
            </div>
            <div>
              <input
                type="password"
                placeholder="كلمة السر"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mb-5 shadow-sm text-right bg-light form-control form-control-lg"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="mb-5">
              <input
                type="submit"
                disabled={!formik.isValid}
                value="تسجيل دخول"
                className=" mr-2 loginbtn"
              />
            </div>
          </form>
        </div>
        <div className="col-md-6 ">
          <img src={login} />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;