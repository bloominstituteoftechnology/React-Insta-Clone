import React, { Component } from 'react';
import styled from "styled-components";

const Form = styled.form`
    margin: 5%;
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 100%;
    height: 57px;
    border: 1px solid #e2e2e2;
    padding-left: 2%;
    background-color: #ffffff;
    margin: 2% 0 0 2%;
`;

class LoginAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userValue: '',
            passValue: '',
            rejected: false,
        };
      }
    
      /**
       *  Check if the username and password is valid and login the user
       *  and if invalid, display text stating username or password is
       *  incorrect
       */
      handleSubmit = (e) => {
          e.preventDefault();
  
          if (this.state.userValue === '') {return;}
  
          if (this.props.check(this.state.userValue, this.state.passValue)) {
              this.setState({rejected: false})
          } else {
              this.setState({rejected: true})
          }
          
      }
  
      // Update username value for Login
      updateInputValue(e) {
          this.setState({
              userValue: e.target.value,
              rejected: false,
          });
      }
  
      // Update password value for Login
      updatePassValue(e) {
  
          this.setState({
              passValue: e.target.value,
              rejected: false
          });
      }

    render() {
        return (
            <div className="login">
                <img src={require("./img/InstagramLogo.png")} alt="Instagram Logo" />
                <Form onSubmit={this.handleSubmit}>
                    <label className="login-title">Login</label><br /><br />
                    <Input type="input" value={this.state.userValue} onChange={e => this.updateInputValue(e)} name="userInput" placeholder="Username" />
                    <Input type="password" value={this.state.passValue} onChange={e => this.updatePassValue(e)} name="passInput" placeholder="Password" />
                    <label className={this.state.rejected ? 'login-reject' : 'login-rejected hidden'}>Username or password is incorrect</label>
                    <Input type="button" onClick={e => this.handleSubmit(e)} value="Login" />
                    <label className="login-register">Don't have one? <label className="register" onClick={this.props.toggle}>Register</label> for one!</label>
                </Form>
            </div>
        );
    }
}

export default LoginAccount;