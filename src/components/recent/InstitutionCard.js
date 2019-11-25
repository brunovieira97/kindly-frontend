import React from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

import "./InstitutionCard.css";

const InstitutionCard = props => {
  return (
    <div className="InstitutionCard">
      <img src={pic1}></img>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </div>
  );
};

export default InstitutionCard;
