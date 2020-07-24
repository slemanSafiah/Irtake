import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, Router } from "react-router-dom";
import { AuthContext } from "./../AuthContext";
export default function Course(props) {
  const [course, setCourse] = useState([]);
  const [module, setModule] = useState([]);
  const [show, setShow] = useState([]);
  const [show2, setShow2] = useState(0);
  const std_num = localStorage.getItem("number");
  const { name } = useParams();
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  useEffect(async () => {
    async function fetchdata() {
      const data = { name, std_num };
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/course/get_course_details",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Vvrvd", res);
      if (res.data.course_status === 0)
        alert("أنت لست مشترك بهذا الكورس أو لم تفعل اشتراكك");
      else {
        const cou = res.data.course[0];
        setCourse((oldArray) => [...oldArray, cou]);
        const mod = res.data.data;
        mod.map((elem) => setModule((oldArray) => [...oldArray, elem]));
      }
    }
    fetchdata();
  }, []);
  const f1 = (str) => {
    let s = "" + str;
    return s.split(" ").join("_");
  };
  const showfun = (index) => () => {
    let show1 = [...show];
    show1[index] = !show1[index];
    setShow(show1);
    console.log(index);
  };
  return (
    <div className="container mb-5">
      {course.map((course) => {
        return (
          <>
            {" "}
            <h3 className="text-right mt-2">كتاب {course.name}</h3>
            <h4 className="text-right text-secondary">
              الصف {course.classname}
            </h4>
            <div className="row mt-5 rounded shadow-lg">
              <div className="col-md-4  mt-3 mb-3 ">
                {" "}
                <img
                  src={course.path}
                  style={{ width: "300px", height: "400px" }}
                  className="imgcourse ml-4 shadow-sm "
                />
              </div>
              <div className="col-md-8 mt-3 mb-3  ">
                <h2 className="text-right mt-3 ">
                  : الوحدات في كتاب {course.name}{" "}
                </h2>
                <div>
                  <hr className="w-75  float-right" />
                  <br />
                  {module.map((module) => {
                    return (
                      <div className=" mt-3 text-right">
                        {" "}
                        <h2 onClick={showfun(module.id)}>
                          {" "}
                          {module.name}{" "}
                          <span>
                            <i class="fa fa-list-alt" aria-hidden="true"></i>
                          </span>
                        </h2>
                        {show[module.id] ? (
                          <div>
                            {module.lessons.map((les) => (
                              <>
                                <h4
                                  className="text-right dropdown-item"
                                  onClick={() =>
                                    (window.location.href = `/lesson/${f1(
                                      course.classname
                                    )}&${f1(course.name)}&${f1(
                                      module.name
                                    )}&${f1(les.name)}`)
                                  }
                                >
                                  {les.name}{" "}
                                  <i class="fa fa-book" aria-hidden="true"></i>
                                </h4>
                                <div className="mr-5 text-secondary">
                                  <h5 className="text-right ">
                                    :اختبارات الدرس
                                  </h5>
                                  {les.quiz.map((quiz) => (
                                    <h6 className="">
                                      {quiz}{" "}
                                      <i
                                        class="far fa-file-alt	 mr-2"
                                        aria-hidden="true"
                                        onClick={() =>
                                          (window.location.href = `/lessquiz/${f1(
                                            les.name
                                          )}&${f1(module.name)}&${f1(
                                            course.name
                                          )}&${f1(quiz)}&${f1(
                                            course.classname
                                          )}`)
                                        }
                                      ></i>
                                    </h6>
                                  ))}
                                </div>
                              </>
                            ))}
                            <h3 className="text-right">:اختبارات الوحدة</h3>
                            {module.quiz.map((quiz) => (
                              <h6>
                                {" "}
                                {quiz.quiz}
                                <i
                                  class="far fa-file-alt ml-2 "
                                  aria-hidden="true"
                                  onClick={() =>
                                    (window.location.href = `/modquiz/${f1(
                                      module.name
                                    )}&${f1(course.name)}&${f1(quiz.quiz)}&${f1(
                                      course.classname
                                    )}`)
                                  }
                                ></i>
                              </h6>
                            ))}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  <div>
                    <h3
                      className="text-right mt-5"
                      onClick={() => setShow2(!show2)}
                    >
                      اختبارات الكتاب
                    </h3>
                    {show2 ? (
                      <>
                        {course.quiz_course.map((quiz) => (
                          <div>
                            <h6 className="text-right">
                              {" "}
                              <span>
                                {" "}
                                {quiz}
                                <i
                                  class="far fa-file-alt ml-2"
                                  aria-hidden="true"
                                  onClick={() =>
                                    (window.location.href = `/couquiz/${f1(
                                      course.name
                                    )}&${f1(quiz)}&${f1(course.classname)}`)
                                  }
                                ></i>
                              </span>
                            </h6>
                          </div>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
