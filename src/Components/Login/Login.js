import React from 'react';
import { LoginWrapper, LoginForm, FormLabel,
          FormInput } from './LoginStyle';

const Login = props => {
  return(
    <LoginWrapper>
      <LoginForm onSubmit={props.handleLogin} >
        <FormLabel htmlFor="username">Username: </FormLabel>
        <FormInput name="username" type="text" placeholder="Enter Username" onChange={props.handleUserChange} />
        <FormLabel htmlFor="password">Password: </FormLabel>
        <FormInput type="password" name="password" placeholder="Enter Password" onChange={props.handleUserChange} />
        <FormInput type="submit" value="submit" />
      </LoginForm>
    </LoginWrapper>
  );
}

export default Login;
