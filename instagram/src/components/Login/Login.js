import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: '',
        }
    }
    login = () =>{
        localStorage.setItem('Username', this.state.username);
    }
    usernameHandler = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    passwordHandler = (event) =>{
        this.setState({
            password: event.target.value
        })
    }
    render(){
        return(
        <form className = 'login-container'>
            <input 
                className = 'username'
                placeholder = 'username'
                type = 'text'
                onChange = {this.usernameHandler}
            />
            <input
                className = 'password'
                placeholder = 'password'
                type = 'text'
                onChange = {this.passwordHandler}
            />
            <button 
                onClick = {this.login}>Log in
            </button>    
        </form>
    )
}
}

export default Login;