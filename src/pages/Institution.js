import React from "react";
import { withRouter } from "react-router-dom";

import "./Institution.css";

const Institution = props => {
  const institution = props.location.institution;
  return (
    <div className="Institution">
      <h1>HELLO THERE {institution.name}</h1>
    </div>
  );
};

export default withRouter(Institution);
