import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ChoiceQuiz from "./../genquiz/ChoiceQuiz";
import ImageQuiz from "./../genquiz/ImageQuiz";
import InputQuiz from "./../genquiz/InputQuiz";
import OrderQuiz from "./../genquiz/OrderQuiz";
import MatchQuiz from "./../genquiz/MatchQuiz";
import { AuthContext } from "./../../AuthContext";
import Countdown from "react-countdown";
import Count from "./Count";
export default function ModuleQuiz() {
  const { module_name, course_name } = useParams();
  const [res, setRes] = useState(0);
  const [last, setLast] = useState(1);
  const [modules, setmodules] = useState([]);
  const [fin, setFin] = useState(0);
  const [hard, setHard] = useState(0);
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst = authContext.inst;
  const f2 = (str) => {
    let s = "" + str;
    return s.split("_").join(" ");
  };
  const data = {
    module_name: f2(module_name),
    course_name: f2(course_name),
    inst,
    hard,
  };

  const increment = () => {
    setRes(res + 1);
  };

  useEffect(() => {
    setmodules([]);
    axios({
      method: "post",
      url: "http://localhost:5000/api/quiz_module/get_quiz_by_module",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(data.hard, "fdfdg", fin);
        res.data.data.map((elem) =>
          setmodules((oldArray) => [...oldArray, elem])
        );
      })
      .catch((err) => alert("حدث خطأ أعد المحاولة"));
  }, [hard]);
  const finish = () => {
    setFin(fin + 1);
    alert(`لقد حللت ${res} إجابة صحيحة`);
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Count setFin={setFin} fin={fin} res={res} />;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <div className="text-right container">
      <h1 className=" text-right">: اختبار وحدة{module_name}</h1>
      <h5>
        {hard == "4" && !fin ? (
          <Countdown date={Date.now() + 1200000} renderer={renderer} />
        ) : (hard == "3") & !fin ? (
          <Countdown date={Date.now() + 900000} renderer={renderer} />
        ) : hard == "2" && !fin ? (
          <Countdown date={Date.now() + 600000} renderer={renderer} />
        ) : hard == "1" && !fin ? (
          <Countdown date={Date.now() + 420000} renderer={renderer} />
        ) : (
          ""
        )}
        {hard ? " دقيقة متبقية" : ""}{" "}
      </h5>
      <hr />
      <div></div>
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
        onClick={finish}
        value="تأكد"
        className="mt-5 mb-5"
      />
    </div>
  );
}
