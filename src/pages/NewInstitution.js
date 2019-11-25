import React, { useState } from "react";
import axios from "axios";
import "./NewInstitution.css";
import api from "../services/api";
import { getUser } from "../services/auth";

const NewInstitution = props => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [streetName, setStreetName] = useState("");
  const [number, setNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [uf, setUf] = useState("");
  const [neighborhoodName, setNeighborhoodName] = useState("");
  const [countryName, setCountryName] = useState("Brasil");
  const [stateName, setStateName] = useState("Rio Grande do Sul");
  const [postalCode, setPostalCode] = useState("");
  // const [administrator, setAdministrator] = useState(getUser());

  const handleAddress = async () => {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`
      );
      const data = response.data;
      setStreetName(data.logradouro);
      setCityName(data.localidade);
      setUf(data.uf);
      setNeighborhoodName(data.bairro);
    } catch (e) {
      setError("CEP inválido");
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!name || !phoneNumber) {
      setError("Preencha todos os dados para se cadastrar!");
    } else if (!postalCode) {
      setError("Endereço inválido!");
    } else {
      try {
        const address = {
          streetName,
          number,
          cityName,
          uf,
          neighborhoodName,
          countryName,
          stateName,
          postalCode
        };
        const userId = getUser().id;
        const administrator = { id: userId };
        const institution = {
          name,
          phoneNumber,
          description,
          administrator,
          wishlist: {}
        };
        const newInstitution = { ...institution, address };
        await api.post("/institution", newInstitution);
        props.history.push("/");
      } catch (e) {
        setError("Ocorreu um erro ao cadastrar a instituição!");
      }
    }
  };

  return (
    <div className="NewInstitution">
      <form
        className="NewInstitution-form"
        id="institution-form"
        onSubmit={handleSubmit}
      >
        <h1>Nova Instituição</h1>
        {error && <p>{error}</p>}
        <div className="NewInstitution-form-name">
          <input
            type="text"
            placeholder="Nome da Institução"
            value={name}
            name="name"
            onChange={evt => setName(evt.target.value)}
          ></input>
        </div>

        <div className="NewInstitution-form-details">
          <input type="text" placeholder="CNPJ" name="cnpj"></input>
          <input
            type="text"
            placeholder="Telefone"
            maxLength="13"
            minLength="9"
            /*pattern="\(\d{2}\)\d{5}-\d{4}"*/
            value={phoneNumber}
            name="phoneNumber"
            onChange={evt => setPhoneNumber(evt.target.value)}
          ></input>
        </div>

        <div className="NewInstitution-form-text-area">
          <textarea
            placeholder="Descrição da instituição"
            name="description"
            value={description}
            cols="100"
            rows="7"
            form="institution-form"
            onChange={evt => setDescription(evt.target.value)}
          ></textarea>
        </div>

        <input
          type="number"
          name="postalCode"
          placeholder="CEP"
          value={postalCode}
          maxLength="8"
          onBlur={handleAddress}
          onChange={evt => setPostalCode(evt.target.value)}
        ></input>
        <input
          type="text"
          name="streetName"
          placeholder="Logradouro"
          value={streetName}
          disabled={true}
          onChange={evt => setStreetName(evt.target.value)}
        ></input>
        <input
          type="number"
          name="number"
          placeholder="Número"
          value={number}
          onChange={evt => setNumber(evt.target.value)}
        ></input>
        <input
          type="text"
          name="neighborhoodName"
          placeholder="Bairro"
          value={neighborhoodName}
          disabled={true}
          onChange={evt => setNeighborhoodName(evt.target.value)}
        ></input>
        <input
          type="text"
          name="cityName"
          placeholder="Cidade"
          value={cityName}
          disabled={true}
          onChange={evt => setCityName(evt.target.value)}
        ></input>
        <input
          type="text"
          name="uf"
          placeholder="UF"
          value={uf}
          disabled={true}
          onChange={evt => setUf(evt.target.value)}
        ></input>
        <button type="submit">Finalizar</button>
      </form>
    </div>
  );
};

export default NewInstitution;
