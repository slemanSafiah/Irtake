import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./../../AuthContext";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

export default function ImageQuiz(props) {
  const [choice, setChoice] = useState("");
  const { question, sort } = props.quiz;
  const [success, setSuccess] = useState(0);
  const authContext = useContext(AuthContext);

  var formData = new FormData();
  const token = authContext.token;
  const name = authContext.name;
  const number = authContext.number;

  formData.append("name", name);
  formData.append("number", number);
  const onSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/api/files/add_file",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    props.setLast(sort + 1);
  };
  return (
    <form onSubmit={onSubmit} className="text-right mt-3 mb-3">
      <h1>السؤال</h1>

      <p className="text-right">{ReactHtmlParser(question)}</p>
      <div className="form-group">
        <input
          type="file"
          name="file"
          className="form-control w-50 text-right"
          multiple
          onChange={(e) => {
            const files = e.target.files;
            console.log(files);

            formData.append("file", files[0]);

            console.log(formData);
          }}
        />
        <input
          type="submit"
          disabled={props.last < props.quiz.sort}
          value="تأكد"
        />
      </div>
    </form>
  );
}
