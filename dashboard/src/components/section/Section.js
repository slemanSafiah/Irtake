import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";
import { Editor } from "@tinymce/tinymce-react";

export default function Section() {
  const [title, setTitle] = useState();
  const [lesson_name, setLesson_name] = useState();
  const [module, setModule] = useState();
  const [sort, setSort] = useState();
  const [course_name, setCourse_name] = useState();
  const [text, setText] = useState();
  const [url, setUrl] = useState();
  const [classname, setClassname] = useState();
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setText(content);
  };
  const addsec = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      lesson_name === "" ||
      module === "" ||
      sort === "" ||
      course_name === "" ||
      text === ""
    )
      alert("تأكد من ملأ جميع الحقول");
    else {
      let data = {
        title,
        lesson_name,
        module,
        course_name,
        sort,
        text,
        url,
        classname,
      };
      console.log(data);
      axios({
        method: "post",
        url: "http://localhost:5000/api/files/add_image",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          console.log(res, "jcdlk");
          alert("تم إضافة الفقرة بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأ أعد المحاولة");
        });
    }
  };
  const deletesec = (e) => {
    e.preventDefault();

    if (
      course_name === "" ||
      module === "" ||
      lesson_name === "" ||
      title === ""
    )
      alert("تاكد من إدخال جميع البيانات");
    else {
      const data = { course_name, module, lesson_name, title, classname };
      axios({
        method: "post",
        url: "http://localhost:5000/api/section/delete_section",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          alert("تم الحذف بنجاح");
        })
        .catch((err) => {
          alert("حدث خطأأعد المحاولة ");
        });
    }
  };

  return (
    <section>
      <h2 className="text-right">أضف فقرة</h2>
      <form>
        <div className="form-row">
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="title"
              name="title"
              placeholder="أدخل عنوان الفقرة"
              value={title}
              onChange={(event) => {
                const { value } = event.target;
                setTitle(value);
              }}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              id="classnumber"
              placeholder="أدخل الصف"
              value={classname}
              onChange={(event) => setClassname(event.target.value)}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              name="lesson_name"
              id="lesson_name"
              placeholder="أدخل اسم الدرس"
              value={lesson_name}
              onChange={(event) => {
                const { value } = event.target;
                setLesson_name(value);
              }}
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control text-right"
              name="course_name"
              id="course_name"
              placeholder="أدخل اسم الكتاب"
              value={course_name}
              onChange={(event) => {
                const { value } = event.target;
                setCourse_name(value);
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            {" "}
            <input
              type="text"
              className="form-control text-right"
              placeholder="أدخل رابط الفيديو"
              value={url}
              onChange={(event) => {
                const { value } = event.target;
                setUrl(value);
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="module"
              name="module"
              placeholder="أدخل اسم الوحدة"
              value={module}
              onChange={(event) => {
                const { value } = event.target;
                setModule(value);
              }}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="text"
              className="form-control text-right"
              id="sort"
              name="sort"
              placeholder="أدخل رقم الفقرة"
              value={sort}
              onChange={(event) => {
                const { value } = event.target;
                setSort(value);
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <Editor
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect |image video bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
            />
          </div>
        </div>
        <button type="submit" className="btn" onClick={addsec}>
          <i className="fa fa-plus text-warning" aria-hidden="true"></i>
        </button>

        <button type="submit" className="btn" onClick={deletesec}>
          <i className="fas fa-trash-alt text-danger" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
