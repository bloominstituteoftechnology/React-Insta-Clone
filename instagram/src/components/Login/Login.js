import React from "react";

import "./Login.css";
import iglogo from "../../img/iglogo.png";
import instacamera from "../../img/instacamera.png";

const Login = props => {
  return (
    <div className="form-container">
      <div className="logos">
        <img className="cam" alt="instagram camera" src={instacamera} />
        <img className="logo" alt="instagram logo" src={iglogo} />
      </div>

      <form className="signin-form">
        <input
          name="username"
          type="text"
          value={props.username}
          onChange={props.changeHandler}
          placeholder=" username"
        />
        <input
          name="password"
          type="password"
          value={props.password}
          onChange={props.changeHandler}
          placeholder=" password"
        />
        <button className="sign-in" onClick={props.signIn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
