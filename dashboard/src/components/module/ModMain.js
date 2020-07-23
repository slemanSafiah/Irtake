import React from "react";
import Module from "./Module";
import ModQuiz from "./ModQuiz";
import GetMod from "./GetMod";
import MainQuiz from "./MainQuiz";
export default function ModMain() {
  return (
    <div>
      <Module />
      <hr />
      <GetMod />
      <hr />
      <MainQuiz />
      <hr />
      <ModQuiz />
    </div>
  );
}
