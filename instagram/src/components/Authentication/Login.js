import React, { Component } from "react";



class LogIn extends Component{
    constructor() {
        super();
        this.state = {
          username: "",
  
          password: ""
        };
      }

      handleInput = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
     
      addNewLogin = e => {
        const user = this.state.username;

        localStorage.setItem("username", user);
     
        window.location.reload();
      };
    
    render(){
        console.log(this.state);
    return(
        <form onSubmit={this.addNewLogin}>
        <input onChange={this.handleInput} name="username" value={this.state.username} placeholder="Username" type="text"></input>
        <input  onChange={this.handleInput}  name="password" value={this.state.password} placeholder="Password" type="password"></input>
        <button>Log-In</button>
        </form>
        
    );
}

};

export default LogIn;
