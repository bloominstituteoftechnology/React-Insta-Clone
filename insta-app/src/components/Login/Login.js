import React, { Component } from "react";
import "./Login.css";
import styled from "styled-components"; 

const Div = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-around; 
flex-wrap: wrap; 
width:100%;
height:800px;
background: linear-gradient(-90deg, lightcoral, yellow)
`
const DivBox = styled.div`
margin: 30px 0; 
`
const FormLogin = styled.form`
display: flex; 
flex-direction: column; 
justify-content: center;
align-items: center; 
margin: auto; 
width: 350px; 
height: 350px; 
border-radius: 30%; 
background:white;  
`
const FormSignUp = styled.form`
display: flex; 
justify-content: center; 
align-items: center; 
flex-direction: column; 
margin: auto; 
width: 350px; 
height: 350px; 
border-radius: 30%; 
background:white; 
`
const H1 = styled.h1`
font-size: 25px; 
text-align: center; 
color: orange; 
`
const InputBar = styled.input`
margin: 10px 0; 
width: 200px; 
height: 20px; 
`
const Btn = styled.button`
width: 75px; 
height: 15px; 
margin: 10px 0; 
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup:"",
      signuppass:"", 
      name: "",
      email:"", 
      username: "",
      password: ""
    };
  }
  handleLoginInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitInput = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <Div>
        <DivBox>
          <FormLogin>
          <H1>Login</H1>
            <InputBar
              type="text"
              placeholder="                       Username"
              name="username"
              onChange={this.handleLoginInput}
              value={this.state.username}
            />
            <InputBar
              type="text"
              placeholder="                       Password"
              name="password"
              onChange={this.handleLoginInput}
              value={this.state.password}
            />
            <Btn onClick={this.handleSubmitInput}>
              Log in
            </Btn>
          </FormLogin>
        </DivBox>
        {/* Only refrence what is above cause that works with the logging into the app */}
        <DivBox>
          <FormSignUp>
          <H1>Sign Up</H1>
          <InputBar
              type="text"
              name="name"
              placeholder="                        Full Name"
              onChange={this.handleLoginInput}
              value={this.state.name}
            />
            <InputBar
              type="text"
              name="email"
              placeholder="                        E-mail"
              onChange={this.handleLoginInput}
              value={this.state.email}
            />
             <InputBar
              type="text"
              name="signup"
              placeholder="                        Username"
              onChange={this.handleLoginInput}
              value={this.state.signup}
            />
            <InputBar
              type="text"
              name="signuppass"
              placeholder="                        Password"
              onChange={this.handleLoginInput}
              value={this.state.signuppass}
            />
            <Btn onClick={this.handleSubmitInput}>Sign Up</Btn>
          </FormSignUp>
        </DivBox>
      </Div>
    );
  }
}

export default Login;
