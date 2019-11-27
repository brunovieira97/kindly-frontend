import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import api from "../services/api";

import "./SearchBar.css";

const SearchBar = props => {
  const [search, setSearch] = useState("");

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const response = await api.get(`/institution/search?name=${search}`);
    } catch (e) {
      setSearch("");
    }
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
        />
      </form>
    </div>
  );
};

export default withRouter(SearchBar);
