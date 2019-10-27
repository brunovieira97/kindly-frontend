import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './SignUp.css'
import logo from '../assets/logo.png';

class SignUp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             email:'',
             error: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSignUp(evt){
        evt.preventDefault();
        const { username, email, password } = this.state;
        if (!username || !email || !password) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        } else {
            //api...
        }
      };

    render() {
        return (
            <div className="SignUp">
                <form onSubmit={this.handleSignUp} className="SignUp-form">
                    <img src={logo} alt="Logo Kindly"></img>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type='text' 
                        id='username' 
                        name='username' 
                        placeholder="Nome de usuário"
                        value={this.state.username} 
                        onChange={this.handleChange}>
                    </input>
                    <input type='password' 
                        id='password' 
                        name='password' 
                        placeholder="Senha"
                        value={this.state.password} 
                        onChange={this.handleChange}>
                    </input>
                    <input type='text' 
                        id='email' 
                        name='email' 
                        placeholder="E-mail"
                        value={this.state.email} 
                        onChange={this.handleChange}>
                    </input>
                    <button type="submit">Cadastrar</button>
                    <hr />
                    <NavLink to="/signin">Fazer login</NavLink>
                </form>
            </div>
        )
    }

}

export default SignUp;
