import React from "react";
import "./Institution.css";

const Institution = props => {
  return (
    <div className="Institution">
      <h1>HELLO THERE {props.institution.name}</h1>
    </div>
  );
};

export default Institution;
