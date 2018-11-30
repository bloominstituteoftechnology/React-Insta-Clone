import React from 'react';
import './Login.css';
import Authenticate from '../Login/Login';
import styled from "styled-components";

const FormLogin = styled.form
`  width: 500px;
   background: gray;
   border-radius: 6px;
   margin: 10px auto;
   padding: 10px 25px;
`
class Login extends React.Component{
  state ={
    username: '',
    password:''
  }

  handleUserInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render(){
    return(
      <FormLogin>
         <h3>Welcome to React Insta Clone</h3>
         <div>Please Login</div>
         <div>
           <input
             type="text"
             placeholder="User Name"
             name="username"
             value={this.state.username}
             onChange={this.handleUserInput}
             key = {'un'}
           />
         </div>
         <div>
           <input
             type="password"
             placeholder="Password"
             name="password"
             value={this.state.password}
             onChange={this.handleUserInput}
             key={'pw'}
           />
           <br />
           <button onClick={this.props.login}>Log In</button>
         </div>
       </FormLogin>
    )
  }
}

export default Login;
