import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChoiceQuiz from "./../genquiz/ChoiceQuiz";
import ImageQuiz from "./../genquiz/ImageQuiz";
import InputQuiz from "./../genquiz/InputQuiz";
import OrderQuiz from "./../genquiz/OrderQuiz";
import MatchQuiz from "./../genquiz/MatchQuiz";

import { AuthContext } from "./../../AuthContext";

export default function LessonQuiz() {
  const {
    lesson_name,
    module_name,
    course_name,
    quiz,
    classname,
  } = useParams();
  const [res, setRes] = useState(0);
  const [last, setLast] = useState(1);
  const [modules, setmodules] = useState([]);
  const [fin, setFin] = useState(0);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst = authContext.inst;
  const std_num = localStorage.getItem("number");
  const mark = 0;
  const f2 = (str) => {
    let s = "" + str;
    return s.split("_").join(" ");
  };
  const data = {
    module_name: f2(module_name),
    lesson_name: f2(lesson_name),
    course_name: f2(course_name),
    quiz: f2(quiz),
    classname: f2(classname),
    inst,
    mark,
    std_num,
  };

  useEffect(async () => {
    console.log(data);
    async function fetchdata() {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_lesson/get_quiz_by_lesson",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data.data);
      const less = res.data.data;
      less.map((elem) => setmodules((oldArray) => [...oldArray, elem]));
    }
    fetchdata();
  }, []);
  const increment = () => {
    setRes(res + 1);
  };
  const onclick = () => {
    setFin(1);
    axios({
      method: "post",
      url: "http://localhost:5000/api/lesson_marks/add_mark",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    alert(`لقد حللت ${res} إجابة صحيحة `);
  };
  return (
    <div className="text-right container">
      <h1 className=" text-right mb-2">: اختبار درس {lesson_name}</h1>
      <h2 className=" text-right mb-4">: {quiz}</h2>

      {modules.map((quiz) => {
        if (quiz.type == 3)
          return (
            <OrderQuiz
              quiz={quiz}
              increment={increment}
              setLast={setLast}
              last={last}
              fin={fin}
              className="mt-3 mb-3"
            />
          );
        else if (quiz.type == 1)
          return (
            <InputQuiz
              quiz={quiz}
              increment={increment}
              setLast={setLast}
              last={last}
              fin={fin}
              className="mt-3 mb-3"
            />
          );
        else if (quiz.type == 2)
          return (
            <ImageQuiz
              quiz={quiz}
              increment={increment}
              setLast={setLast}
              last={last}
              fin={fin}
              className="mt-3 mb-3"
            />
          );
        else if (quiz.type == 5)
          return (
            <MatchQuiz
              quiz={quiz}
              increment={increment}
              setLast={setLast}
              last={last}
              fin={fin}
              className="mt-3 mb-3"
            />
          );
        else
          return (
            <ChoiceQuiz
              quiz={quiz}
              increment={increment}
              setLast={setLast}
              last={last}
              fin={fin}
              className="mt-3 mb-3"
            />
          );
      })}
      <input
        type="submit"
        disabled={modules.length + 1 != last}
        onClick={onclick}
        value="تأكد"
      />
    </div>
  );
}
