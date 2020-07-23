import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams, Router } from "react-router-dom";
import { AuthContext } from "./../AuthContext";
export default function Course(props) {
  const [course, setCourse] = useState([]);
  const [module, setModule] = useState([]);
  const [img, setImg] = useState();

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
        setImg(res.data.img);
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

  return (
    <div className="container mb-5">
      {course.map((course) => {
        return (
          <>
            {" "}
            <h3 className="text-right mt-2">
              <span>
                {" "}
                <i
                  class="far fa-file-alt	 mr-2"
                  aria-hidden="true"
                  onClick={() =>
                    (window.location.href = `/couquiz/${f1(course.name)}`)
                  }
                ></i>
              </span>
              كتاب {course.name}
            </h3>
            <h4 className="text-right text-secondary">{course.classname}</h4>
            <div className="row mt-5 rounded shadow-lg">
              <div className="col-md-4  mt-3 mb-3 ">
                {" "}
                <img
                  src={img}
                  style={{ width: "300px", height: "400px" }}
                  className="imgcourse ml-4 shadow-sm "
                />
              </div>
              <div className="col-md-8 mt-3 mb-3  ">
                <h2 className="text-right mt-3 ">
                  : الوحدات في كتاب {course.name}{" "}
                </h2>
                <hr className="w-75  float-right" />
                <br />
                {module.map((module) => {
                  return (
                    <div className="dropdown mt-3 text-right">
                      <span>
                        <i
                          class="far fa-file-alt mr-2 fa-2x"
                          aria-hidden="true"
                          onClick={() =>
                            (window.location.href = `/modquiz/${f1(
                              module.name
                            )}&${f1(course.name)}`)
                          }
                        ></i>
                      </span>
                      <button
                        className="btn btn-secondary shadow-sm btn-lg dropdown-toggle text-right dropdown-toggle-split w-50"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {" "}
                        <span>{module.name}</span>
                      </button>
                      <div
                        className="dropdown-menu text-right"
                        aria-labelledby="dropdownMenuButton"
                      >
                        {module.lessons.map((les) => (
                          <h4
                            className="text-right dropdown-item"
                            onClick={() =>
                              (window.location.href = `/lesson/${f1(
                                course.classname
                              )}&${f1(course.name)}&${f1(module.name)}&${f1(
                                les
                              )}`)
                            }
                          >
                            {les}
                          </h4>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
