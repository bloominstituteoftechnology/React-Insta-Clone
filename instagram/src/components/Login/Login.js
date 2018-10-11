import React from "react";

import "./Login.css";
import iglogo from "../../img/iglogo.png";
import instacamera from "../../img/instacamera.png";
import {
  PageContainer,
  LogoContainer,
  CamImg,
  LogoImg,
  FormWrapper,
  UserInput,
  SignInButton
} from "./LoginStyles.js";

const Login = props => {
  return (
    <PageContainer>
      <LogoContainer>
        <CamImg alt="instagram camera" src={instacamera} />
        <LogoImg alt="instagram logo" src={iglogo} />
      </LogoContainer>

      <FormWrapper>
        <UserInput
          name="username"
          type="text"
          value={props.username}
          onChange={props.changeHandler}
          placeholder=" username"
        />
        <UserInput
          name="password"
          type="password"
          value={props.password}
          onChange={props.changeHandler}
          placeholder=" password"
        />
        <SignInButton onClick={props.signIn}>Log in</SignInButton>
      </FormWrapper>
    </PageContainer>
  );
};

export default Login;
