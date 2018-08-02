import React, { Component } from "react";



class LogIn extends Component{
    constructor() {
        super();
        this.state = {
          username: "",
  
          password: ""
        };
      }

      handleUsername = e => {
        this.setState({ username: e.target.value });
      };
    
      handlePassword = e => {
        this.setState({ password: e.target.value });
      };
    
      addNewLogin = e => {
        e.preventDefault();
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
      };
    
    render(){
    return(
        <form onSubmit={this.state.addNewLogin}>
        <input onChange={this.state.handleUsername}  placeholder="Username" type="text"></input>
        <input  onChange={this.state.handlePassword}  placeholder="Password" type="text"></input>
        <button>Log-In</button>
        </form>
        
    );
}

};

export default LogIn;
