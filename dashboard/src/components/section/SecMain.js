import React from "react";
import Section from "./Section";
import SecQuiz from "./SecQuiz";
import GetSec from "./GetSec";
export default function SecMain() {
  return (
    <div>
      <Section />
      <hr />
      <GetSec />
      <hr />
      <SecQuiz />
    </div>
  );
}
