import React from 'react';
import PropTypes from 'prop-types';

import './Login.css';

const LoginContainer = props => {
  return (
    <form 
      name="login-form"
      onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        value={props.usernameInput}
        name="usernameInput"
        onChange={props.handleChange} />
      <input
        type="password"
        placeholder="Enter your password"
        value={props.passwordInput}
        name="passwordInput"
        onChange={props.handleChange} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginContainer;