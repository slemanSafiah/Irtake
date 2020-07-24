import React, { useState, useEffect } from "react";
import axios from "axios";
export const CourseContext = React.createContext();

export function CourseProvider(Props) {
  const [courses, setCourses] = useState([]);

  useEffect(async () => {
    const result = await axios
      .get(`http://localhost:5000/api/course/get_courses`)
      .then((res) => {
        res.data.data.map((course) => {
          courses.push(course);
        });
        console.log(res.data);
      })
      .catch((err) => {
        alert("حدث خطأ أعد المحاولة");
      });
    courses.map((co) => console.log("dssdsd", co));
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
      }}
    >
      {Props.children}
    </CourseContext.Provider>
  );
}
