import React, { useEffect } from "react";

export default function Count(props) {
  useEffect(() => {
    props.setFin(props.fin + 1);
    alert(`لقد حللت ${props.res} إجابة صحيحة`);
  }, []);
  return <div></div>;
}
