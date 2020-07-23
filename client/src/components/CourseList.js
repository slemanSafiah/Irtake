import React, { useContext } from "react";
import { CourseContext } from "./../CourseContext";
import CourseCard from "./CourseCard";
export default function CourseList() {
  const courseContext = useContext(CourseContext);

  return (
    <div className="container">
      <h1 className="text-center mt-3 text-secondary">المناهج الدراسية</h1>
      <div className="row">
        {courseContext.courses.map((course) => {
          return <CourseCard course={course} key={course.id} />;
        })}
      </div>
    </div>
  );
}
