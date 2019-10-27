import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './SignIn.css'
import logo from '../assets/logo.png';

class SignIn extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             error:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSignIn(evt){
        evt.preventDefault();
        const { username, password } = this.state;
        if (!username || !password) {
          this.setState({ error: "Preencha usuário e senha para continuar!" });
        } else {
            //api...
        }
    }

    render() {
        return (
            <div className="SignIn">
                <form onSubmit={this.handleSignIn} className="SignIn-form">
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
                    <button type="submit">Login</button>
                    <hr />
                    <NavLink to="/signup">Cadastrar</NavLink>
                </form>
            </div>
        )
    }
    
}

export default SignIn;
