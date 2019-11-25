import React, { useState, useEffect } from "react";
import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";

import "./InstitutionCard.css";

const InstitutionCard = props => {
  const [picture, setPicture] = useState("");

  useEffect(() => {
    setPicture(choosePicture());
  }, []);

  const choosePicture = () => {
    switch (props.pic) {
      case 1:
        return pic1;
      case 2:
        return pic2;
      case 3:
        return pic3;
      default:
        break;
    }
  };

  return (
    <div className="InstitutionCard">
      <img src={picture}></img>
      <h2>{props.item.name}</h2>
      <p className="truncate">{props.item.description}</p>
    </div>
  );
};

export default InstitutionCard;
