import React from "react";
import  Login  from "../Login/Login";

const Authenticate = PassedComponent => {
  let timer = "5";
  return class AuthenticationClass extends React.Component {
    state = {
      loggedIn: false,
      credentials: localStorage.getItem('credentials')
    };

    render() {
      return this.state.loggedIn ? (
        <PassedComponent />
      ) : (
          <Login />
        );
    }
  };
};


export default Authenticate;

