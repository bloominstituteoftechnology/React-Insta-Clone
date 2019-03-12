import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
  constructor(){
    super();
    this.state=({
      inputText: ''
    })
  }

  handleChange = ev =>{
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  login = ev => {
      console.log(this.state.inputText);
     localStorage.setItem('username', this.state.inputText); 
    
  }
  

  render() {
    return (
      <Login login={this.login} handleChange={this.handleChange} inputTex={this.state.inputText} />
    );
  }
}

export default LoginPage;