import React from "react";
const AuthForm = props => {
  return props.loggedIn ? (
    <button onClick={props.auth}>Log Out</button>
  ) : (
    <button onClick={props.auth}>Log In</button>
  );
};

export default AuthForm;
