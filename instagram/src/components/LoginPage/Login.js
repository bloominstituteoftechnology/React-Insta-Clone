import React from 'react';

const Login = (props) => {
  return (
      <form onSubmit={props.login}>
        <input type="text" name="username" placeholder="username"/>
        <input type="text" name="password" placeholder="password"/>
        <button>Login</button>
      </form>
  );
}
 
export default Login;