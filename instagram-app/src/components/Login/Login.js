import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const Form = styled.form`
width: 50%;
  margin: 0 auto;
`;

const FormInput = styled.input`
font-size: 0.9em;
  color: #000;
  font-weight: 100;
  width: 94.5%;
  display: block;
  border: none;
  border-radius: 10px;
  padding: 0.8em;
  border: 2px solid #76b852;
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 96%, #fff 4%);
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #fff 4%);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 2em;
`;

const SubmitBtn = styled.input`
font-size: 0.9em;
  color: #fff;
  background: #76b852;
  outline: none;
  border: 1px solid #76b852;
  border-radius: 10px;
  cursor: pointer;
  padding: 0.9em;
  -webkit-appearance: none;
  width: 100%;
  margin: 2em 0;
  letter-spacing: 4px;
  &:hover {
  -webkit-transition: 0.5s all;
  -moz-transition: 0.5s all;
  -o-transition: 0.5s all;
  -ms-transition: 0.5s all;
  transition: 0.5s all;
  background: #8dc26f;
}
`;
const Label = styled.label`
font-size: 0.9em;
  color: #000;
  font-weight: 100;
  margin-left: 0.7rem;
`;

const Login = ({ props }) => {
  const [userInput, setUserInput] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() =>{
    setloggedIn(true)
  },[userInput])
  const loginHandler = ()=>{
    let logDeets = {
      username: userInput,
      password: userPassword,
      loggedIn: loggedIn
    }
    localStorage.setItem("User", JSON.stringify(logDeets));
  }

  const handleUserNameChange = e => {
    setUserInput(e.target.value);
  };
  const handlePasswordChange = e => {
    setUserPassword(e.target.value)
  };
  return (
    <Form onSubmit={(e) => loginHandler(e)}>
      <Label htmlFor="username">
        Username
      </Label>
      <FormInput
      type="text"
      value={userInput}
      onChange={handleUserNameChange}/>
      <Label htmlFor="password">
        Password
      </Label>
      <FormInput
      type="password" 
      value={userPassword}
      onChange={handlePasswordChange}
      />
      <SubmitBtn type="submit" value="LOGIN" />
    </Form>
  );
};

export default Login;
