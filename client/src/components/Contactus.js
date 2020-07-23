import React, { useState } from "react";
import { ButtonContainer } from "./Layout/Button";
import { Link, NavLink } from "react-router-dom";
import logo from "./../img/logo.png";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Getintouch() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [number, setnumber] = useState("");
  const data = { name, email, number, message };
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (name == "" || email == "" || message == "" || number == "")
      alert("تأكد من ملأ جميع الحقول قبل الإرسال");
    else {
      axios
        .post("http://localhost:5000/api/files/send_email", data)
        .then((res) => {
          console.log(data);
          history.push("/");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة ثانية");
        });
    }
  };
  return (
    <div className="container shadow-lg rounded contact py-5 mb-5">
      <div className="row">
        {" "}
        <div className="div col-md-2">
          {" "}
          <img src={logo} className="mr-auto  " />
        </div>
        <div className="div col-md-10">
          {" "}
          <h3 className="text-right ">تواصل معنا</h3>
        </div>
      </div>
      <hr />
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <input
                      id="Full Name"
                      name="Full Name"
                      placeholder="اسمك الكامل"
                      className="form-control text-right"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control text-right"
                      id="inputEmail4"
                      placeholder="البريد الإلكتروني"
                      value={email}
                      onChange={(event) => setemail(event.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      id="Mobile No."
                      name="Mobile No."
                      placeholder="رقم الموبايل"
                      className="form-control text-right"
                      required="required"
                      type="text"
                      value={number}
                      onChange={(event) => setnumber(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <textarea
                      id="comment"
                      name="comment"
                      cols="40"
                      rows="5"
                      placeholder="رسالتك"
                      className="form-control text-right"
                      value={message}
                      onChange={(event) => setmessage(event.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="form-row">
                  <p onClick={onSubmit}>
                    <ButtonContainer>أرسل</ButtonContainer>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-right mb-5">
            <h5>:العنوان</h5>
            <p> دمشق -النبك</p>
          </div>
          <div className="text-right mb-2">
            <h5>الإيميل</h5>
            <p> info@irtaki.com</p>
          </div>
          <div className="text-right mb-5">
            <h5>رقم الهاتف</h5>
            <p> +963-0930737281</p>
          </div>
          <hr />
          <div className="social">
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fab fa-google-plus-g icon"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fab fa-linkedin-in icon"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fab fa-facebook-f icon"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="#">
                  <i className="fab fa-twitter icon"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
