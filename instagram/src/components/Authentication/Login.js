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

        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password);
        window.location.reload();
      };
    
    render(){
        console.log(this.state);
    return(
        <form onSubmit={this.addNewLogin}>
        <input onChange={this.handleUsername}  placeholder="Username" type="text"></input>
        <input  onChange={this.handlePassword}  placeholder="Password" type="text"></input>
        <button>Log-In</button>
        </form>
        
    );
}

};

export default LogIn;
