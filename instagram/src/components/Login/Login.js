import React from 'react';
// import './Login.css';
import styled from 'styled-components';
import Input from '../StyledComponents/Reusables/Input';
import Button from '../StyledComponents/Reusables/Button';

const LoginContainer = styled.div`
  padding-top: 50px;
`
const InstaLogoText = styled.div`
  img {
    max-width: 150px;
  } 
`
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
  margin: 2rem auto 0 auto;
  padding: 5rem;
  background: #aa4b6b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #3b8d99, #6b6b83, #aa4b6b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const LoginPage = (props) => {
  return (
    <LoginContainer>
      <InstaLogoText>
        <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
      </InstaLogoText>
      <LoginForm onSubmit={props.onLogin}>
        <Input type="text" placeholder="username" onChange={props.handleNewLogin} required/>
        <Input type="text" placeholder="password" required/>
        <Button>Login</Button>
      </LoginForm>
    </LoginContainer>
  )
}

export default LoginPage;