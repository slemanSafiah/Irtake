import React from "react";
import AddLessQuiz from "./AddLessQuiz";
import MainQuiz from "./MainQuiz";
export default function LessMain() {
  return (
    <div className="container background shadow-lg rounded">
      <MainQuiz />
      <hr />
      <AddLessQuiz />
    </div>
  );
}
