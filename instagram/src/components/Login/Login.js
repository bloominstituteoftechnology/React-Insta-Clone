import React from 'react';
import './Login.css';
import styled from 'styled-components';
import Input from '../StyledComponents/Input';
import Button from '../StyledComponents/Button';

const LoginPage = (props) => {
  return (
    <div className="login-container">
      <div className="insta-logo-text">
        <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
      </div>
      <form className="login-form" onSubmit={props.onLogin}>
        <Input type="text" placeholder="username" onChange={props.handleNewLogin} required/>
        <Input type="text" placeholder="password" required/>
        <Button>Login</Button>
      </form>
    </div>
  )
}

export default LoginPage;