import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import Section from "./Section";
import axios from "axios";
import { AuthContext } from "./../AuthContext";

export default function Lesson(props) {
  const [sections, setSections] = useState([]);
  const [mapp, setMapp] = useState(1);
  const [statues, setStatues] = useState(0);
  const { classname, course, module, lesson } = useParams();
  const authContext = useContext(AuthContext);
  const token = authContext.auth;
  const inst = authContext.inst;

  const f2 = (str) => {
    let s = "" + str;
    return s.split("_").join(" ");
  };
  const f1 = (str) => {
    let s = "" + str;
    return s.split(" ").join("_");
  };

  useEffect(() => {
    setSections([]);
    let isCancelled = false;
    const data = {
      course: f2(course),
      module: f2(module),
      lesson: f2(lesson),
      classname: f2(classname),
      inst,
    };
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:5000/api/section/get_sections",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      const temp = res.data.data;
      console.log(res.data.data, "res");
      if (!isCancelled && temp) {
        temp.map((elem) => setSections((oldArray) => [...oldArray, elem]));
      }
    });
    return () => {
      isCancelled = true;
    };
  }, [mapp]);
  return (
    <div className="container">
      <h1 className="text-right text-secondary">{f2(lesson)}</h1>

      {sections
        .filter((sec) => sec.sort === mapp)
        .map((section) => (
          <Section
            section={section}
            key={section.id}
            statues={statues}
            setMapp={setMapp}
            len={sections.length}
          />
        ))}
    </div>
  );
}
