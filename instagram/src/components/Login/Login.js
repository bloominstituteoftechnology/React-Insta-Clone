import React from 'react';

const Login = props => {
  return(
    <form>
      <p>Username: <input type="text" name="username" onChange={props.handleUser}/></p>
      <p>Password: <input type="text" name="password" onChange={props.handlePass}/></p>
      <button onClick={props.login}>Log In</button>
      <button onClick={props.signup}>Sign Up</button>
    </form>
  );
}

export default Login;
