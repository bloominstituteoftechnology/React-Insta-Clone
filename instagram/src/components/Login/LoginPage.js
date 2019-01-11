import React from "react";
import PropTypes from "prop-types";
// import { Input } from "reactstrap";
import styled from "styled-components";
import "./Login.css";

const InputField = styled.input`
  max-width: 600px;
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
    <div className="login-page">
      <LoginForm className="login-form" name="login" onSubmit={props.onSubmit}>
        <InputField
          placeholder="username"
          value={props.userName}
          onChange={props.nameInput}
        />
        <InputField
          type="password"
          placeholder="password"
          value={props.password}
          onChange={props.passInput}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </LoginForm>
    </div>
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
