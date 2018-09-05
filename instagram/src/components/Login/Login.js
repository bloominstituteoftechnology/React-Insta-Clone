import React from 'react';

function Login(props) {
  return (
    <form>
      <input placeholder="Username" name="username" />
      <input placeholder="Password" name="password" />
      <button>Login</button>
    </form>
  );
}

export default Login;
