import React, { useEffect, useState } from "react";
import { getUser, isAuthenticated } from "../services/auth";
import InstitutionCard from "../components/recent/InstitutionCard";
import api from "../services/api";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.get("/institution/last3");
      setInstitutions(response.data);
    };
    loadData();
  }, []);

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
    </div>
  );
};

export default Home;
