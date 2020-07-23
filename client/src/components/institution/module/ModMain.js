import React from "react";
import AddModQuiz from "./AddModQuiz";
import MainQuiz from "./MainQuiz";
export default function ModMain() {
  return (
    <div className="background container shadow-lg rounded">
      <MainQuiz />
      <hr />
      <AddModQuiz />
    </div>
  );
}
