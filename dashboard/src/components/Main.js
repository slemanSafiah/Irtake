import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../AuthContext";
import Login from "./Login";
export default function Main() {
  return (
    <>
      <div className="">
        {" "}
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/password">تغيير كلمة السر</Link>
          </div>
          <div className="col-md-6">
            <h3>تغيير كلمة السر </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/course">أضف كتاب</Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف أو تعديل كتاب </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/module">أضف وحدة ضمن كتاب موجود مسبقا</Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف أو تعديل وحدة وإضافة اختبار للوحدة </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/lesson">أضف درس ضمن وحدة موجودة مسبقا</Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف أو تعديل درس وإضافة اختبار للدرس </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/section"> أضف فقرة ضمن درس موجود مسبقا</Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف أو تعديل فقرة وإضافة اختبار للفقرة </h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <Link to="/student">أضف طالب </Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف طالب من كورس معين </h3>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="col-md-6">
            <Link to="/institution">أضف معهد</Link>
          </div>
          <div className="col-md-6">
            <h3>إضافة أو حذف معهد</h3>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
