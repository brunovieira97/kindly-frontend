import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import "./SignIn.css";
import logo from "../assets/logo.png";
import { login, getToken, userSession } from "../services/auth";
import api from "../services/api";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      authenticated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSignIn(evt) {
    evt.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: "Preencha usuário e senha para continuar!" });
    } else {
      try {
        const info = { email, password };
        const response = await api.post("/signin", info);
        login(response.data.token);
        this.setState({ authenticated: true });
        if (getToken()) {
          const user = await api.get(`/user/${email}`);
          userSession(user.data);
        }
      } catch (err) {
        console.log(err);
        this.setState({
          error: "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  }

  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSignIn} className="SignIn-form">
          {this.state.authenticated && (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          )}

          <img src={logo} alt="Logo Kindly"></img>
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Nome de usuário"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Senha"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Login</button>
          <hr />
          <NavLink to="/signup">Cadastrar</NavLink>
        </form>
      </div>
    );
  }
}

export default SignIn;
