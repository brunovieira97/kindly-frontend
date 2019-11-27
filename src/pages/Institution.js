import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import WishList from "../components/wishlist/WishList";
import api from "../services/api";
import pic1 from "./../assets/pic1.jpg";
import pic2 from "./../assets/pic2.jpg";
import pic3 from "./../assets/pic3.jpg";

import "./Institution.css";

const Institution = props => {
  const { id } = props.match.params;
  const [isLoading, setIsLoading] = useState(true);
  const [picture, setPicture] = useState({});
  const [institution, setInstitution] = useState({});
  const [address, setAddress] = useState({});

  const randomPic = () => {
    const pic = Math.floor(Math.random() * 3 + 1);
    switch (pic) {
      case 1:
        return pic1;
      case 2:
        return pic2;
      default:
        return pic3;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get(`/institution/${id}`);
      setInstitution(response.data);
      setAddress({ ...response.data.address });
      setIsLoading(false);
      setPicture(randomPic());
    };
    fetchData();
  }, []);

  return (
    <div className="Institution">
      {isLoading ? (
        <div style={{ backgroundColor: "white" }}></div>
      ) : (
        <div>
          <div className="info-container">
            <h2>{institution.name}</h2>
            <img src={picture}></img>
            <p>{institution.description}</p>
            <div className="address-container">
              <h3>Endereço</h3>
              <p>{`${address.streetName}, ${address.number}`}</p>
              <p>{`${address.neighborhoodName}, ${address.cityName}`}</p>
              <p>{`${address.postalCode}`}</p>
              <h3>Contato</h3>
              <p>{institution.phoneNumber}</p>
              <br />
            </div>
          </div>
          <div className="wishlist">
            <WishList />
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Institution);
