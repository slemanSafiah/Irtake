import React, { useState, useEffect } from "react";
import ChoiceQuiz from "./quiz/ChoiceQuiz";
import ImageQuiz from "./quiz/ImageQuiz";
import InputQuiz from "./quiz/InputQuiz";
import OrderQuiz from "./quiz/OrderQuiz";
import MatchQuiz from "./quiz/MatchQuiz";

import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function Section(props) {
  const {
    id,
    title,
    text,
    sort,
    course_name,
    lesson_name,
    module,
    quiz,
    url,
  } = props.section;
  const [last, setLast] = useState(1);
  useEffect(() => {
    console.log(sort);
  }, []);
  return (
    <div className="text-right">
      <div className="row mb-5">
        <div className="col-md-5"></div>
        <div className="col-md-7">
          <h1 className="mt-5 mb-5 text">{title} </h1>
          <h5 className="mt-3 mb-5 text-right">
            <span>
              {sort > 1 ? (
                <button
                  onClick={() => props.setMapp(sort - 1)}
                  className="float-right"
                  value="السابق"
                ></button>
              ) : (
                ""
              )}
            </span>
          </h5>

          {url ? <ReactPlayer controls url={url} /> : ""}

          <p className="mt-5">{ReactHtmlParser(text)} </p>
          <hr className="w-100 mb-5" />
          <h3 className="text-right mb-5">:اختبار الفقرة </h3>
          {quiz.map((quiz) => {
            if (quiz.type == 3)
              return (
                <OrderQuiz
                  quiz={quiz}
                  setLast={setLast}
                  last={last}
                  className="mt-3 mb-3"
                />
              );
            else if (quiz.type == 1)
              return (
                <InputQuiz
                  quiz={quiz}
                  setLast={setLast}
                  last={last}
                  className="mt-3 mb-3"
                />
              );
            else if (quiz.type == 5)
              return (
                <MatchQuiz
                  quiz={quiz}
                  setLast={setLast}
                  last={last}
                  className="mt-3 mb-3"
                />
              );
            else if (quiz.type == 2)
              return (
                <ImageQuiz
                  quiz={quiz}
                  setLast={setLast}
                  last={last}
                  className="mt-3 mb-3"
                />
              );
            else
              return (
                <ChoiceQuiz
                  quiz={quiz}
                  setLast={setLast}
                  last={last}
                  className="mt-3 mb-3"
                />
              );
          })}
          <button
            disabled={quiz.length + 1 != last}
            onClick={() => props.setMapp(sort + 1)}
            className="float-right"
            value="التالي"
          ></button>
        </div>
      </div>
    </div>
  );
}
