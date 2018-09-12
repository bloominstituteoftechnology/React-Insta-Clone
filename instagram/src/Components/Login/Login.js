import React from 'react';
import LoginInput from './LoginPage';

const Login = PassedComponent => props => {
  if (isLoggedIn) {
    return <App />;
  } else {
    return <LoginInput />;
  }
};

export default Login;
