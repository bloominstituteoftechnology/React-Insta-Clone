import React from "react";
import "./Login.css";
import LogoText from "../SearchBar/LogoText";

const Login = props => {
  return (
    <div className="LoginContainer">
      <LogoText size='60px'>InstaKG</LogoText>
      <br />
      <div className="lensContainer">
        <div className="ring" />
        <div className="shutter">
          <form className="formClass" onSubmit={props.methods[0]}>
            <input
              className="loginInput"
              placeholder="Username"
              onChange={props.methods[1]}
              name="userName"
              type="text"
            />
            <br />
            <input
              className="loginInput"
              placeholder="Password"
              name="password"
              type="password"
            />
            <br />
            <button>Login </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
