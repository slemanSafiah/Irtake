import React, { useState, useEffect } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
export default function MatchQuiz(props) {
  const [success, setSuccess] = useState(0);
  const [fir, setFir] = useState(1);
  const [sec, setSec] = useState(1);
  const [thir, setThir] = useState(1);

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
  const onSubmit = (e) => {
    e.preventDefault();
    if (fir == 4 && sec == 3 && thir == 2) {
      console.log(fir, sec, thir);

      setSuccess(1);
    } else {
      setSuccess(2);
    }
    const sort = props.quiz.sort;
    props.setLast(sort + 1);
    setFir(1);
    setSec(1);
    setThir(1);
  };
  return (
    <form onSubmit={onSubmit} className="text-right">
      <h3 className="text-right">السؤال</h3>
      <p className="text-right">{ReactHtmlParser(question)}</p>

      <div className="row text-right">
        <div className="col-md-4"></div>
        <div className="col-md-4 rounded shadow-sm">{ans4} -1ج</div>
        <div className="col-md-4">
          <div className="row rounded shadow-sm">
            <div className="col-md-11 ">{hintAns1} -1س</div>
            <div className="col-md-1">
              <select id="lang" onChange={(e) => setFir(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-4"></div>
        <div className="col-md-4 rounded shadow-sm">{ans3} -2ج</div>
        <div className="col-md-4">
          <div className="row rounded shadow-sm">
            <div className="col-md-11">{hintAns2} -2س</div>
            <div className="col-md-1">
              <select id="lang" onChange={(e) => setSec(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-4"></div>
        <div className="col-md-4 rounded shadow-sm">{ans2}-3ج</div>

        <div className="col-md-4">
          <div className="row rounded shadow-sm">
            <div className="col-md-11">{hintAns3} -3س</div>
            <div className="col-md-1">
              <select id="lang" onChange={(e) => setThir(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-right">
        <div className="col-md-4"></div>
        <div className="col-md-4 rounded shadow-sm">{ans1} -4ج</div>

        <div className="col-md-4"></div>
      </div>
      <div className="mt-5">
        {success == 2 ? (
          <div className="text-right">
            <h6>الجواب الصحيح</h6>
            <h6>س1==ج4</h6>
            <h6>س2==ج3</h6>
            <h6>س3==ج2</h6>
          </div>
        ) : (
          ""
        )}
      </div>
      <input
        type="submit"
        className={
          success == 1
            ? "btn btn-success"
            : success == 2
            ? "btn btn-danger"
            : "btn"
        }
        value="تأكد"
        disabled={props.last < props.quiz.sort}
      />
    </form>
  );
}
