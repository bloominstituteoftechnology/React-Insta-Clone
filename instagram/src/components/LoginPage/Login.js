import React from 'react';

const Login = (props) => {
  return (
    <div>
      <form onSubmit={props.login}>
        <input onChange={props.inputHandler} type="text" name="username" placeholder="username"/>
        <input type="text" name="password" placeholder="password"/>
        <button>Login</button>
      </form>
    </div>
  );
}
 
export default Login;