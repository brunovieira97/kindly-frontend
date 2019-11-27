import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./InstitutionList.css";

const InstitutionList = props => {
  const [style, setStyle] = useState("InstitutionList");

  const handleClick = () => {
    setStyle("empty");
  };

  return (
    <div className={style}>
      <ul>
        {props.items.map((item, i) => (
          <NavLink to={`/institution/${item.id}`}>
            <li key={i} onClick={handleClick}>
              {item.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default InstitutionList;
