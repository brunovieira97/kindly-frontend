import React, { useEffect, useState } from "react";
import { getUser, isAuthenticated } from "../services/auth";
import InstitutionCard from "../components/recent/InstitutionCard";
import api from "../services/api";
import { Link, withRouter, Redirect } from "react-router-dom";

import "./Home.css";

const Home = props => {
  const [institutions, setInstitutions] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await api.get("/institution/last3");
      setInstitutions(response.data);
    };
    loadData();
  }, []);

  const handleInstitution = () => {
    if (isAuthenticated()) {
      window.location = "/newInstitution";
    } else {
      window.location = "/signIn";
    }
  };

  return (
    <div className="Home">
      <div className="Home-welcome">
        <h1>Bem-vindo!</h1>
      </div>
      <div>
        <h2>Instituições recentes</h2>
      </div>
      <div className="Home-recent">
        <ul>
          {institutions.map((inst, i) => (
            <li key={i}>
              <Link to={`/institution/${inst.id}`}>
                <InstitutionCard item={inst} pic={i + 1} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleInstitution}>Nova Instituição</button>
    </div>
  );
};

export default withRouter(Home);
