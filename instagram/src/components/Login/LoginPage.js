import React from "react";
import PropTypes from "prop-types";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import { FiLock } from "react-icons/fi";
import "./Login.css";

const LoginPage = props => {
  return (
    <div className="login-page">
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input
          placeholder="username"
          value={props.userName}
          onChange={props.nameInput}
        />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <FiLock />
        </InputGroupAddon>
        <Input
          placeholder="password"
          value={props.password}
          onChange={props.passInput}
        />
      </InputGroup>
    </div>
  );
};

export default LoginPage;
