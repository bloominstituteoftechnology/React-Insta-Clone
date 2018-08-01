import React, { Component } from "react";

class Login extends Component {
    constructor(props){
        super(props); 
        this.state ={
            username: "", 
            password: "", 
        };
    }
    handleLoginInput = e =>{
        this.setState({[e.target.name]: e.target.value });
    };
    handleSubmitInput = e => {
        const user = this.state.username; 
        localStorage.setItem("user", user); 
        window.location.reload();
    }

render(){
    return(
        <form className="login-box">
            <input
            className="input-login"
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleLoginInput}
            value={this.state.username}
            />
             <input
            className="input-login"
            type="text"
            placeholder="Password"
            name="password"
            onChange={this.handleLoginInput}
            value={this.state.password}
            />
            <button onClick={this.handleSubmitInput} className="login-btn">
            Log in
            </button>
        </form> 
    ); 
}
}

export default Login; 