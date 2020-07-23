import React from "react";

import AddCouQuiz from "./AddCouQuiz";
import MainQuiz from "./MainQuiz";
export default function CourMain() {
  return (
    <div className="container background shadow-lg rounded">
      <MainQuiz />
      <hr />
      <AddCouQuiz />
    </div>
  );
}
