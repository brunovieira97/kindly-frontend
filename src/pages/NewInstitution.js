import React, { useState } from 'react';
import './NewInstitution.css';

const NewInstitution = props => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [streetName, setStreetName] = useState('');
  const [number, setNumber] = useState('');
  const [cityName, setCityName] = useState('');
  const [uf, setUf] = useState('');
  const [neighborhoodName, setNeighborhoodName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <div className="NewInstitution">
      <form className="NewInstitution-form" id="institution-form">
        <h1>Nova Instituição</h1>
        {error && <p>{error}</p>}
        <input
          type="text"
          placeholder="Nome da Institução"
          value={name}
          name="name"
          onChange={(evt) => setName(evt.target.value)}
        >
        </input>
        <input
          type="text"
          placeholder="CNPJ"
          name="cnpj"
        >
        </input>
        <input
          type="text"
          placeholder="Telefone"
          value={phoneNumber}
          name="phoneNumber"
          onChange={(evt) => setPhoneNumber(evt.target.value)}
        >
        </input>
        <input type='text'
          name='postalCode'
          placeholder="CEP"
          value={postalCode}
          /*onBlur={handleAddress}*/
          onChange={(evt) => setPostalCode(evt.target.value)}>
        </input>
        <input type='text'
          name='streetName'
          placeholder="Logradouro"
          value={streetName}
          disabled={true}
          onChange={(evt) => setStreetName(evt.target.value)}>
        </input>
        <input type='text'
          name='number'
          placeholder="Número"
          value={number}
          onChange={(evt) => setNumber(evt.target.value)}>
        </input>
        <input type='text'
          name='neighborhoodName'
          placeholder="Bairro"
          value={neighborhoodName}
          disabled={true}
          onChange={(evt) => setNeighborhoodName(evt.target.value)}>
        </input>
        <input type='text'
          name='cityName'
          placeholder="Cidade"
          value={cityName}
          disabled={true}
          onChange={(evt) => setCityName(evt.target.value)}>
        </input>
        <input type='text'
          name='uf'
          placeholder="UF"
          value={uf}
          disabled={true}
          onChange={(evt) => setUf(evt.target.value)}>
        </input>
        <button type="submit">Finalizar</button>

      </form>
    </div>
  )

}

export default NewInstitution;