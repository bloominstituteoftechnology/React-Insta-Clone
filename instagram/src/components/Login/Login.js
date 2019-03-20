import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Login.css';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   padding: 6px 10px;
//   margin: 5px;
//   border: none;
//   border-radius: 3px;
//   color: pink;
//   background: black
// `

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form className='login-form'>
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>
        <FormGroup>
          <Input 
            type='text'
            placeholder='User Name'
            name='username'
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type='password'
            placeholder='Password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Button color='success' size='large' onClick={this.handleLoginSubmit}>
            Log In
          </Button>
          {/* <StyledButton onClick={this.handleLoginSubmit}>
            Log In
          </StyledButton> */}
        </FormGroup>
      </Form>
    )
  }

}

export default Login;