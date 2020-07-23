import React, { useState, useEffect } from "react";
import axios from "axios";
export const CourseContext = React.createContext();

export function CourseProvider(Props) {
  const [isLogin, setIsLogin] = useState(true);
  const [courses, setCourses] = useState([]);

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  };

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
        isLogin,
        courses,
        toggleIsLogin,
      }}
    >
      {Props.children}
    </CourseContext.Provider>
  );
}
