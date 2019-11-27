import React, { useState } from "react";
import api from "../services/api";

import InstitutionList from "./InstitutionList";

import "./SearchBar.css";

const SearchBar = props => {
  const [search, setSearch] = useState("");
  const [isSubmited, setIsSubmited] = useState(false);
  const [institutions, setInstitutions] = useState([]);

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const response = await api.get(`/institution/search?name=${search}`);
      setInstitutions(response.data);
      setIsSubmited(true);
    } catch (e) {
      setSearch("");
    }
  };

  const handleFocus = () => {
    setIsSubmited(false);
    setSearch("");
  };

  return (
    <div class-name="SearchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="SearchBar-input"
          placeholder="Pesquisar..."
          value={search}
          onChange={evt => setSearch(evt.target.value)}
          onMouseOver={handleFocus}
        />
        {isSubmited && <InstitutionList items={institutions} />}
      </form>
    </div>
  );
};

export default SearchBar;
