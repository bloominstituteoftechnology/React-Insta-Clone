import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label for="username">Username</label>
          <input type="text" placeholder="Username" name="username" />
          <label for="password">Username</label>
          <input type="text" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
