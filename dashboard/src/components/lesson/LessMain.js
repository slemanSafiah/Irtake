import React from "react";
import Lesson from "./Lesson";
import LessQuiz from "./LessQuiz";
import GetLesson from "./GetLesson";
import MainQuiz from "./MainQuiz";
export default function LessMain() {
  return (
    <div>
      <Lesson />
      <hr />
      <GetLesson />
      <hr />
      <MainQuiz />
      <hr />
      <LessQuiz />
    </div>
  );
}
