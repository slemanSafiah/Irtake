import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChoiceQuiz from "./../genquiz/ChoiceQuiz";
import ImageQuiz from "./../genquiz/ImageQuiz";
import InputQuiz from "./../genquiz/InputQuiz";
import OrderQuiz from "./../genquiz/OrderQuiz";
import MatchQuiz from "./../genquiz/MatchQuiz";

import { AuthContext } from "./../../AuthContext";

export default function CourseQuiz() {
  const { course_name } = useParams();
  const [res, setRes] = useState(0);
  const [last, setLast] = useState(1);
  const [modules, setmodules] = useState([]);
  const [fin, setFin] = useState(0);
  const authContext = useContext(AuthContext);
  const inst = authContext.inst;
  const token = authContext.auth;
  const f2 = (str) => {
    let s = "" + str;
    return s.split("_").join(" ");
  };
  const data = {
    course_name: f2(course_name),
    inst,
  };

  useEffect(async () => {
    console.log(data);
    async function fetchdata() {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/api/quiz_course/get_quiz_by_course",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      const less = res.data.data;
      less.map((elem) => setmodules((oldArray) => [...oldArray, elem]));
    }
    fetchdata();
  }, []);
  const increment = () => {
    setRes(res + 1);
  };

  return (
    <div className="text-right container">
      <h1 className=" text-right"> : اختبار درس {course_name}</h1>
      <hr />
      {modules.map((quiz) => {
        if (quiz.type == 2)
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
        else if (quiz.type == 4)
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
        onClick={() => {
          setFin(1);
          alert(`لقد حللت ${res} إجابة صحيحة `);
        }}
        value="تأكد"
      />
    </div>
  );
}
