import React from "react";

import Course from "./Course";
import CourQuiz from "./CourQuiz";
import MainQuiz from "./MainQuiz";
export default function CourMain() {
  return (
    <div>
      <Course />
      <hr />
      <MainQuiz />
      <hr />
      <CourQuiz />
    </div>
  );
}
