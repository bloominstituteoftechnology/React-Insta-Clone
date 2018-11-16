import React from 'react';
import styled from "styled-components";
// import PropTypes from 'prop-types';

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const InputLoginButton = styled.input`
  &:hover {background-color: lightgreen}
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
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
      <InputLoginButton className="login-btn" type="submit" placeholder="Login" />
    </form>
  </div>
  );
}

// Login.propTypes = {
//   comment: PropTypes.objectOf(PropTypes.string)
// }

export default Login;