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
        value={props.usernameInput}
        name="usernameInput"
        onChange={props.handleChange} />
      <input
        type="password"
        value={props.passwordInput}
        name="passwordInput"
        onChange={props.handleChange} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginContainer;