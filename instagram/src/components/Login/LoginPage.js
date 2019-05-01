import React from "react";
import PropTypes from "prop-types";
// import { Input } from "reactstrap";
import styled from "styled-components";
import HeaderLogo from "../StyledComponents";
import "./Login.css";

const LoginHeaderLogo = styled(HeaderLogo)`
  border: none;
  font-size: 4.8rem;
`;

const LogInBox = styled.div`
  border: 2px solid #c9c9c9;
  border-style: inset;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  padding: 5%;
  text-align: center;
`;

const LogInputField = styled.input`
  ${"" /* max-width: 600px; */}
  width: 100%;
  font-size: 2.5rem;
  margin: 10px auto;
`;

const SubmitButton = styled.button`
  max-width: 250px;
  width: 100%;
  font-size: 2.5rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const LoginPage = props => {
  return (
    <LogInBox className="login-page">
      <LoginHeaderLogo>SlightDelayGram</LoginHeaderLogo>
      <LoginForm className="login-form" name="login" onSubmit={props.onSubmit}>
        <LogInputField
          placeholder="username"
          value={props.username}
          onChange={props.changeHandler}
          name="username"
        />
        <LogInputField
          type="password"
          placeholder="password"
          value={props.password}
          onChange={props.changeHandler}
          name="password"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </LoginForm>
    </LogInBox>
  );
};

LoginPage.propTypes = {
  userName: PropTypes.string,
  password: PropTypes.string,
  nameInput: PropTypes.func,
  passInput: PropTypes.func,
  onSubmit: PropTypes.func
};

export default LoginPage;
