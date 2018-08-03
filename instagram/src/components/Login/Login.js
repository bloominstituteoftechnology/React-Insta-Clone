import React, {Component} from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`
  z-index: 20;
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const InputDiv = styled.input`
  width: 100px;
  height: 50px;
  background: white;
`;


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: '',
    }
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  toStorage = event => {
    event.preventDefault();
    localStorage.setItem("Username", `${this.state.username}`)
    localStorage.setItem("Password", `${this.state.password}`)
    this.setState({username: "", password: "",})
    window.location.reload();
  }

  render(){

    return (
      <FormDiv onSubmit={this.toStorage}>
        <h1>Login</h1>
        <input
          name="username"
          value={this.state.username}
          placeholder="name"
          onChange={this.inputHandler}
          required ></input>
        <input
          type="password"
          name="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.inputHandler}
          required>{this.value}</input>
        <button>Submit</button>
      </FormDiv>
    )
  }
}

export default Login;

  // <InputDiv name="username"
  // value={this.state.username}
  // placeholder="name"
  // onChange={this.inputHandler}></InputDiv>
  // <InputDiv type="password"
  // name="password"
  // value={this.state.password}
  // placeholder="password"
  // onChange={this.inputHandler}>
  // {this.value}
  // </InputDiv>
