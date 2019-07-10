import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  margin: 0 auto;
  margin-top: 0;
`;

const Header = styled.header`
  @import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
  font-family: "Lobster", cursive;
  font-size: 2rem;
  font-weight: lighter;
  padding: 0 0 0 1rem;
  margin: 0 0 3rem 0;
`;
const Form = styled.form`
  width: 15%;
  height: 40%;
  margin: 5rem auto;
  border: 2px solid lightgrey;
  padding: 4rem;
`;

const FormInput = styled.input`
  /* font-size: 0.9em; */
  color: #000;
  font-weight: 100;
  width: 90%;
  display: block;
  padding: 0.5rem;
  background-color: rgba(242, 241, 239, 1);
  border: 2px solid rgba(242, 241, 239, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    border: 1px solid rgba(189, 195, 199, 1);
  }
`;

const SubmitBtn = styled.input`
  font-size: 0.9em;
  color: #fff;
  background: lightskyblue;
  outline: none;
  border: 1px solid lightskyblue;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.5em;
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
    background: skyblue;
  }
`;

const Login = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: ""
  });

  const [loggedIn, setloggedIn] = useState(false);

  useEffect(() => {
    setloggedIn(true);
  }, [userInput.username, userInput.password]);
  const loginHandler = () => {
    let logDeets = {
      username: userInput.username,
      password: userInput.password,
      loggedIn: loggedIn
    };
    localStorage.setItem("User", JSON.stringify(logDeets));
  };

  const handleUserNameChange = e => {
    e.persist();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserInput(userInput => ({ ...userInput, [name]: value }));
  };

  return (
    <Container>
      <Form onSubmit={e => loginHandler(e)}>
        <Header>Instagram</Header>
        <FormInput
          placeholder="Phone number, username or email"
          name="username"
          type="text"
          value={userInput.username}
          onChange={handleUserNameChange}
        />
        <FormInput
          placeholder="Password"
          name="password"
          type="password"
          value={userInput.password}
          onChange={handleUserNameChange}
        />
        <SubmitBtn type="submit" value="Log In" />
      </Form>
    </Container>
  );
};

export default Login;
