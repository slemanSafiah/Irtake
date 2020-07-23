import React, { useState, useEffect, useContext } from "react";
import CourseCard from "./../CourseCard";
import axios from "axios";
import Password from "./Password";
import { AuthContext } from "./../../AuthContext";
export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const number = authContext.number;

  useEffect(async () => {
    async function fetchdata() {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/std_course/get_course_std",
        data: number,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Vvrvd", res);

      const cou = res.data.data;
      cou.map((course) => {
        setCourses((oldArray) => [...oldArray, cou]);
      });
    }
    fetchdata();
  }, []);
  return (
    <div className="container mb-5">
      <h1 className="text-right mt-3 mb-5">:الدروس التي اشتركت فيها</h1>
      <div className="row">
        {courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
      <hr />
      <Password />
    </div>
  );
}
