import React from 'react';
// import PropTypes from 'prop-types';
import './Style.css';

const Login = props => {
  return (
  <div className="login-page">
    <form className="login-form" onSubmit={(e) => props.login(e)}>
      <div className="login-usr">Login:
        <input 
          className="login-usr-input"
          type="text"
          name="usrname"
          value={props.usrname}
          onChange={props.changeHandler}
        />
      </div>
      <div className="login-pwd">Password:
        <input
          className="login-pwd-input"
          type="password"
          name="usrpwd"
          value={props.usrpwd}
          onChange={props.changeHandler}
        />
      </div>
      <input className="login-btn" type="submit" placeholder="Login" />
    </form>
  </div>
  );
}

// Login.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default Login;