import React, { useState } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function InputQuiz(props) {
  const [choice, setChoice] = useState("");
  const [success, setSuccess] = useState(0);
  const [correct, setcorrect] = useState("");
  const [count, setcount] = useState(0);

  const { question, answer, hint } = props.quiz;
  const onSubmit = (e) => {
    e.preventDefault();
    if (choice == answer) {
      const sort = props.quiz.sort;
      props.setLast(sort + 1);
      setSuccess(1);
    } else {
      setSuccess(2);
      setcount(count + 1);
      if (count == 1) {
        setcorrect(answer);
      }
    }
  };
  return (
    <form onSubmit={onSubmit} className="text-right mt-3 mb-3">
      <div className="form-group">
        <h3 className="text-right">:السؤال</h3>
        <h3>{ReactHtmlParser(question)}</h3>
        <div className="row">
          <div className="col-md-6">
            <p>{correct}</p>
            {count == 2 ? (
              <i
                className="fab fa-whatsapp fa-2x m-2"
                style={{ backgroundColor: "green", color: "#fff" }}
                aria-hidden="true"
              ></i>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            {" "}
            <input
              type="text"
              className="form-control w-50 text-right float-right"
              placeholder=" أدخل إجابتك"
              onChange={(event) => setChoice(event.target.value)}
            />
          </div>
          <div className="col-md-12">
            {" "}
            <div class="dropdown mt-3 mb-5">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                احصل على تلميح للجواب
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <h5 class="dropdown-item">{hint}</h5>
              </div>
            </div>
          </div>
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
      </div>
    </form>
  );
}
