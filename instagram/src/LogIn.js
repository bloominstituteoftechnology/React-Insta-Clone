import React, { Component } from 'react';
import LoginSubmit from './Components/SearchBar/LoginSubmit';


class LogIn extends Component {

  constructor() {
    super();
    this.state = {
        login: [],
      username: [],
      password: [],
      uInput:'',
      pInput:'',

    } 
  }

  componentDidMount() {
    this.setState({login: LoginSubmit}) 

    }

  uInputHandler = event => {
    const value = event.target.value;
    this.setState (
      {uInput:value}
    );

    }

    pInputHandler = event => {
        const value = event.target.value;
        this.setState (
          {pInput:value}
        );


        }

    submitHandler = event => {
      event.preventDefault();
        this.state.username.unshift(this.state.uInput);
        this.state.password.unshift(this.state.pInput);
        console.log('Congratulations! You are Now Signed Up.');
    }

    loginHandler = event => {
        event.preventDefault();
          if (this.state.uInput === this.state.username[0] && this.state.pInput === this.state.password[0]){
              let user = this.state.uInput;
              localStorage.setItem('user', user);
              window.location.reload();
      }
      else if (this.state.uInput !== this.state.username[0]) {
          console.log('You Are Not Registered')
      }
      else if (this.state.pInput !== this.state.password[0]) {
        console.log('Wrong Password')
    }
    }


  render() {
    return (
      <div className="LogIn">
      <LoginSubmit valueOne={this.state.uInput} valueTwo={this.state.pInput} uInputHandler={this.uInputHandler} pInputHandler={this.pInputHandler} submitHandler={this.submitHandler} loginHandler={this.loginHandler}/>
      </div>
    );
  }
}

export default LogIn;
