import React from 'react';
import './Login.css'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            username: ''
        }
    }

    updateUsername = event => this.setState({username: event.target.value})

    submitUsername = event => {        
        let username = this.state.username;
        localStorage.setItem('username', username);        
    }

    render(){
        return(
            <div className="login">
                <h1 className="login-title">Instagram</h1>
                <div className="login-card">                    
                    <p className="login-subtitle">Please login to view your hipster friends</p>
                    <form  className="form">
                        <p className="form-title">Username:</p>
                        <input onChange = {this.updateUsername}></input>
                        <p className="form-title">Password:</p>
                        <input></input>
                        <button className="btn" onClick = {this.submitUsername}>Login</button>
                    </form>
                </div>
            </div>
            
        )
    }    
}

export default Login