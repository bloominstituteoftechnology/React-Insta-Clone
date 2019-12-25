import React from 'react';
import * as styl from './LoginStyles';
import logo from '../img/instagram.png';

const Login = props => {
  return (
    <styl.LoginWrapper>

      <styl.LogoWrapper>
        <styl.Logo src={logo} alt="ig logo" ></styl.Logo>
      </styl.LogoWrapper>

      <styl.FormGroup onSubmit={props.loginSubmit}>
        <styl.LoginInput
          type="text"
          placeholder="Username"
          value={props.username}
          onChange={props.usernameHandler}
          required
        ></styl.LoginInput>

        <styl.LoginInput
          type="password"
          placeholder="Password"
          value={props.password}
          onChange={props.passwordHandler}
          required
        ></styl.LoginInput>

        <styl.LoginButton
          onClick={props.loginSubmit}
          type="submit"
        >Log in</styl.LoginButton>
      </styl.FormGroup>
    </styl.LoginWrapper>
  );
};

export default Login;
