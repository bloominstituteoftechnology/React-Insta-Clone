import React from 'react';

const Login = props => {
  return(
    <form>
      <p>Username: <input type="text" name="username" /></p>
      <p>Password: <input type="text" name="password" /></p>
      <button onClick={props.login}>Log In</button>
    </form>
  );
}

export default Login;
