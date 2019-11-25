import React from "react";
import logo from "../assets/logo.png";

import "./Lead.css";

function Lead() {
  return (
    <div className="Lead">
      <a href="/">
        <img src={logo} alt="Kindly Logo" className="Lead-img"></img>
      </a>
    </div>
  );
}

export default Lead;
