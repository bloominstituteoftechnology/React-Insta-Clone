import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";
import "./Login.css";

const LoginPage = props => {
  return (
    <div className="login-page">
      <form className="login-form" name="login" onSubmit={props.onSubmit}>
        <Input
          placeholder="username"
          value={props.userName}
          onChange={props.nameInput}
        />
        <Input
          placeholder="password"
          value={props.password}
          onChange={props.passInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
