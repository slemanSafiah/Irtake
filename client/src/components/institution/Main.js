import React from "react";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container background text-right shadow-lg rounded mb-5">
      <h1 className="text-center pt-3 mb-5 ">لوحة تحكم المعهد</h1>
      <div className="row mt-3 ">
        <div className="col-md-6">
          <Link to="/password">تغيير كلمة السر</Link>
        </div>
        <div className="col-md-6">
          <h3>تغيير كلمة السر </h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <Link to="/addmodquiz">أضف اختبار لوحدة</Link>
        </div>
        <div className="col-md-6">
          <h3>إضافة اختبار للوحدة </h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Link to="/addlessquiz">أضف اختبار درس</Link>
        </div>
        <div className="col-md-6">
          <h3> إضافة اختبار للدرس</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Link to="/addsecquiz"> أضف اختبار فقرة </Link>
        </div>
        <div className="col-md-6">
          <h3>إضافة اختبار للفقرة </h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <Link to="/addcouquiz"> أضف اختبار للكتاب </Link>
        </div>
        <div className="col-md-6">
          <h3>إضافة اختبار للكتاب </h3>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-md-6">
          <Link to="/student">أضف طالب </Link>
        </div>
        <div className="col-md-6">
          <h3>إضافة أو حذف طالب تابع لمعهدي </h3>
        </div>
      </div>
    </div>
  );
}
