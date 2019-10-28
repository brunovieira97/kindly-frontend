import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import logo from '../assets/logo.png';
import './SignUp.css'

class SignUp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             firstName:'',
             lastName:'',
             password:'',
             email:'',
             cpf:'',
             address:{},
             error: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    }

    handleSignUp(evt){
        evt.preventDefault();
        const {firstName, lastName, email, password, cpf } = this.state;
        if ( !firstName || !lastName || !email || !password || !cpf) {
          this.setState({ error: "Preencha todos os dados para se cadastrar" });
        }else{
            this.props.history.push({pathname:'/signUpDetails',state:this.state});
        }
    }

    render() {
        return (
            <div className="SignUp">
                <form onSubmit={this.handleSignUp} className="SignUp-form">
                    <img src={logo} alt="Logo Kindly"></img>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type='text' 
                        id='firstName' 
                        name='firstName' 
                        placeholder="Nome"
                        value={this.state.firstName} 
                        onChange={this.handleChange}>
                    </input>
                    <input type='text' 
                        id='lastName' 
                        name='lastName' 
                        placeholder="Sobrenome"
                        value={this.state.lastName} 
                        onChange={this.handleChange}>
                    </input>
                    <input type='text' 
                        id='cpf' 
                        name='cpf' 
                        placeholder="CPF"
                        maxLength="11"
                        value={this.state.cpf} 
                        onChange={this.handleChange}
                        >
                    </input>
                    <input type='text' 
                        id='email' 
                        name='email' 
                        placeholder="E-mail"
                        value={this.state.email} 
                        onChange={this.handleChange}>
                    </input>
                    <input type='password' 
                        id='password' 
                        name='password' 
                        placeholder="Senha"
                        value={this.state.password} 
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

export default withRouter(SignUp);
