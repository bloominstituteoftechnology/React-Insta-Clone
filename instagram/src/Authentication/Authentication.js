import React from "react";
import Login from "../Login/Login";
// const Authenticate = App => {



export default PassedComponent => { 
  return class AuthenticationClass extends React.Component {
    componentDidUpdate() {
      if(!this.props.credentials && localStorage.getItem("credentials")) {
          this.props.handleCreds(localStorage.getItem("creditionals"));

      }
    }

    render() {
      return this.props.credentials ? (
        <PassedComponent />
      ) : (
          <Login {...this.props} />

      );
    }
  };
};