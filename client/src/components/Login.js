import React, { useContext, useState } from "react";
import * as Yup from "yup";
import login from "./../img/login.svg";
import axios from "axios";
import { AuthContext } from "./../AuthContext";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { CourseContext } from "./../CourseContext";
import { Link } from "react-router-dom";
function LoginForm() {
  let history = useHistory();

  const authContext = useContext(AuthContext);
  const prodContext = useContext(CourseContext);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      number: "",
      password: "",
      name: "",
    },
    validationSchema: Yup.object({
      number: Yup.string()
        .required("Required")
        .min(10, "رقم الموبايل يتألف على الأقل من 10 أرقام")
        .matches(phoneRegExp, "لا يمكن أن يحوي رقم الموبايل أحرف"),
      password: Yup.string()
        .required("Required")
        .min(8, "كلمة السر لا يجب أن تقل عن 8 محارف"),
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const data = {
        mobil_number: values.number,
        password: values.password,
        name: values.name,
      };
      console.log(data, prodContext.isLogin);

      {
        !prodContext.isLogin
          ? axios
            .post("http://localhost:5000/api/users/add_user", data)
            .then((res) => {
              console.log("uppppu", res.data);

              if (res.data.success === 1) {
                const token = res.data.token;
                const inst = res.data.inst;
                const name = values.name;
                localStorage.setItem("token", token);
                localStorage.setItem("inst", inst);
                localStorage.setItem("number", values.number);
                localStorage.setItem("state", false);
                authContext.setAuth(token);
                localStorage.setItem("name", name);

                history.push("/");
              }
            })
            .catch((err) => {
              alert("حدث خطأ أثناء تسجيل الدخول أعد المحاولة ثانية");
            })
          : axios
            .post("http://localhost:5000/api/users/login", data)
            .then((res) => {
              console.log("uuuuu", res.data);
              if (res.data.success === 1) {
                console.log("kdsjkldsj");
                const token = res.data.token;
                const inst = res.data.inst;
                const name = res.data.name;
                localStorage.setItem("token", token);
                localStorage.setItem("number", values.number);
                localStorage.setItem("inst", inst);
                localStorage.setItem("state", false);
                localStorage.setItem("name", name);
                authContext.setAuth(token);
                history.push("/");
              }
            })
            .catch((err) => {
              alert("حدث خطأ أثناء تسجيل الدخول أعد المحاولة ثانية");
            });
      }

      this.formik.resetForm({});
    },
  });
  return (
    <div className="container shadow-lg mb-5">
      <div className="row">
        <div className="col-md-6 login  d-flex justify-content-center rounded">
          <form onSubmit={formik.handleSubmit}>
            <span className="d-flex justify-content-center mt-4">
              <i className="fas fa-user-graduate mr-3 fa-2x icon"></i>
              <i className="fas fa-lock fa-2x icon"></i>
            </span>
            <h1 className="mt-3">
              {" "}
              {prodContext.isLogin ? "تسجيل دخول" : "إنشاء حساب"}
            </h1>
            {!prodContext.isLogin ? (
              <div>
                <input
                  type="string"
                  name="name"
                  placeholder="أدخل اسمك"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="mb-5 shadow-sm mt-3 text-right bg-light form-control form-control-lg"
                />
                {formik.touched.name && formik.errors.name ? (
                  <h6 className="text-danger">{formik.errors.name}</h6>
                ) : null}
              </div>
            ) : (
                ""
              )}

            <div>
              <input
                type="string"
                name="number"
                id="number"
                placeholder="أدخل رقم هاتفك"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                className="mb-5 shadow-sm text-right bg-light form-control form-control-lg"
              />
              {formik.touched.number && formik.errors.number ? (
                <h6 className="text-danger">{formik.errors.number}</h6>
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
                value={prodContext.isLogin ? "تسجيل دخول" : "إنشاء حساب"}
                className=" mr-2 loginbtn"
              />
              <Link onClick={prodContext.toggleIsLogin}>
                {prodContext.isLogin ? "إنشاء حساب" : "تسجيل دخول"}
              </Link>
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
