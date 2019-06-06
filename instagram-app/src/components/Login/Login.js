import React, { useState } from "react";
import "./Login.css";

const Login = ({ props }) => {
  const [userInput, setUserInput] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const loginHandler =()=>{
    let logDeets = {
      username: userInput,
      password: userPassword
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
    <form className="login" onSubmit={(e) => loginHandler(e)}>
      <label className="tag" htmlFor="username">
        Username
      </label>
      <input className="text email"
      type="text"
      value={userInput}
      onChange={handleUserNameChange}/>
      <label className="tag" htmlFor="password">
        Password
      </label>
      <input className="text"
      type="password" 
      value={userPassword}
      onChange={handlePasswordChange}
      />
      <input type="submit" value="LOGIN" />
    </form>
  );
};

export default Login;
