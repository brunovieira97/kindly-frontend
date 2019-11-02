import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import api from '../services/api';
import logo from '../assets/logo.png';
import './SignUpDetails.css';

class SignUpDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      streetName: '',
      number: '',
      cityName: '',
      stateName: 'Rio Grande do Sul',
      uf: '',
      neighborhoodName: '',
      countryName: '',
      postalCode: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleAddress(evt) {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${this.state.postalCode}/json/`);
      const data = response.data;
      this.setState({
        streetName: data.logradouro,
        number: '',
        cityName: data.localidade,
        stateName: 'Rio Grande do Sul',
        uf: data.uf,
        neighborhoodName: data.bairro,
        countryName: 'Brasil',
        postalCode: this.state.postalCode,
      });
    } catch (e) {
      this.setState({ error: 'CEP inválido' });
    }
  }

  async handleSignUp(evt) {
    evt.preventDefault();
    const address = this.state;
    const user = { ...this.props.location.state, address };
    if (!user.address.postalCode || !user.address.number) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/user", user);
        this.props.history.push("/");
      } catch (e) {
        console.log(e);
        this.setState({ error: 'Ocorreu um erro ao cadastrar sua conta.' });
      }
    }
  };

  render() {
    return (
      <div className="SignUpDetails">
        <form onSubmit={this.handleSignUp} className="SignUpDetails-form">
          <img src={logo} alt="Logo Kindly"></img>
          {this.state.error && <p>{this.state.error}</p>}
          <input type='text'
            id='postalCode'
            name='postalCode'
            placeholder="CEP"
            value={this.state.postalCode}
            onBlur={this.handleAddress}
            onChange={this.handleChange}>
          </input>
          <input type='text'
            id='streetName'
            name='streetName'
            placeholder="Logradouro"
            value={this.state.streetName}
            disabled={true}
            onChange={this.handleChange}>
          </input>
          <input type='text'
            id='number'
            name='number'
            placeholder="Número"
            value={this.state.number}
            onChange={this.handleChange}>
          </input>
          <input type='text'
            id='neighborhoodName'
            name='neighborhoodName'
            placeholder="Bairro"
            value={this.state.neighborhoodName}
            disabled={true}
            onChange={this.handleChange}>
          </input>
          <input type='text'
            id='cityName'
            name='cityName'
            placeholder="Cidade"
            value={this.state.cityName}
            disabled={true}
            onChange={this.handleChange}>
          </input>
          <input type='text'
            id='uf'
            name='uf'
            placeholder="UF"
            value={this.state.uf}
            disabled={true}
            onChange={this.handleChange}>
          </input>
          <button type="submit">Finalizar</button>
        </form>
      </div>
    )
  }

}

export default withRouter(SignUpDetails);