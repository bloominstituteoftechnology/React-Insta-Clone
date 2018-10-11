import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';
import styled, {css} from 'styled-components'
/*
import { StyledButton, StyledButton2, TomatoButton } from '../StyledComponents/Buttons';

import { Target } from 'react-popper';
 
// returns a react component must use backticks!
const SytledButton = styled.button`
  display: inlline-block; 
  border-radius: 3px;
  padding: o.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

 
  ${ props => props.hidden ? css`display: none` : null}

  ${(props) => {
    if(props.redbutton){
      return css `background: red;`
    }
  }}

  ${(props) => {
    if (props.greyButton) {
      return css`background: black;`
    }
  }}

  // add media queries
  @media (max-width): 900px) {
    width: 100%;
  }

// combine with background
${(props) => props.darkgreyButton && css`background: blue;`}

  
  // add media queries
  @media (max-width): 900px) {
    width: 100%;
  } 
`
const TomatoButton = styled(StyledButton)`

// on docs. styled is the higher order component
*/

const name = 'David'
const fullName =`${name} Daniel` // add JS to the string

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
}

handleInputChange = e => {
  this.setState({ [e.Target.name]: e.target.value });
};

handleLoginSubmit = e => {
  const user = this.state.username;
  localStorage.setItem('user', user);
  window.location.reload();
};

render() {
  const disabledButton = this.state.username.length === 0 || this.state.password.length ===
  return (
    <Form className="Login-form">
      <h3>Welcome to D2rd  InstaClone</h3>
      <div>Please Login</div>
      <FormGroup>
        <Input
          type="text"
          placeholder="User Name"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          placholder="Password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          />
          <br />
          <Button 
            color="success" 
            size="sm"
            disabled={disabledButton}
            block 
            onClick={this.handleLoginSubmit}
          >
            Log In
          </Button>
          <StyledButton redbutton={true}>CLICK ME</StyledButton>
          <TomatoButton>TomatoButton</TomatoButton>
          <StyledButton2 greyButton={disabledButton}>Click ME</StyledButton2>
      </FormGroup>
    </Form>
  );
}


export default Login;