import React, { useState, useEffect } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ChoiceQuiz(props) {
  const [choice, setChoice] = useState("");
  const [hint, setHint] = useState("");
  const [success, setSuccess] = useState(0);
  const {
    question,
    ans1,
    ans2,
    ans3,
    ans4,
    hintAns1,
    hintAns2,
    hintAns3,
  } = props.quiz;
  const [ans, setAns] = useState([ans1, ans2, ans3, ans4]);
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const res = shuffleArray(ans);
    res.map((e) => setArr((oldArray) => [...oldArray, e]));
  }, []);
  const shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(choice);
    if (choice == ans4) {
      const sort = props.quiz.sort;
      props.setLast(sort + 1);
      setSuccess(1);
      setHint("");
    } else {
      if (choice == ans1) setHint(hintAns1);
      if (choice == ans2) setHint(hintAns2);
      if (choice == ans3) setHint(hintAns3);
      setSuccess(2);
    }
  };
  return (
    <form onSubmit={onSubmit} className="text-right mt-3 mb-3">
      <p className="text-right">{ReactHtmlParser(question)}</p>
      {arr.map((ele) => {
        return (
          <div class="form-check rounded shadow-sm">
            <label class="form-check-label text-right" for="exampleRadios1">
              {ele}
            </label>
            <input
              type="radio"
              name="optradio"
              value={ele}
              className="form-check-input ml-3"
              onChange={(event) => setChoice(event.target.value)}
            />
          </div>
        );
      })}

      <p>{hint}</p>
      <input
        type="submit"
        className={
          success == 1
            ? "btn btn-success"
            : success == 2
            ? "btn btn-danger"
            : "btn "
        }
        value="تأكد"
        disabled={props.last < props.quiz.sort}
      />
    </form>
  );
}
