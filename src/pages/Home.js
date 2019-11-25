import React, { useEffect, useState } from "react";
import { getUser, isAuthenticated } from "../services/auth";
import InstitutionCard from "../components/recent/InstitutionCard";

import "./Home.css";

const Home = () => {
  const list = [
    {
      name: "Lar de Idosos",
      description:
        "O Lar de Idosos ajuda nossos idosos desfavorecidos desde 2010. Faça parte dessa história."
    },
    {
      name: "Amigos da Caridade",
      description:
        "A ONG Amigos da Caridade precisa de sua ajuda para continuar sua missão."
    },
    {
      name: "Escola de Música Comunitária",
      description: "Ajude-nos a levar a música para nossas crianças. "
    }
  ];

  const [userName, setUserName] = useState("");
  const [institutions, setInstitutions] = useState(list);

  useEffect(() => {
    if (isAuthenticated()) {
      setUserName(`${getUser().firstName} ${getUser().lastName}`);
    }
  }, []);

  return (
    <div className="Home">
      <div className="Home-welcome">
        <h1>Bem-vindo {userName}</h1>
      </div>
      <div>
        <h2>Instituições recentes</h2>
      </div>
      <div className="Home-recent">
        <ul>
          {institutions.map((inst, i) => (
            <li key={i}>
              <InstitutionCard item={inst} picture={i} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
