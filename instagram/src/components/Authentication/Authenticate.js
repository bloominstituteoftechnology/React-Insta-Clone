import React from "react";
import Login from "../Login/Login";

const authenticate = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Login 
          loginSubmit={this.loginSubmit}
          />
          <WrappedComponent />
        </React.Fragment>
      );
    }
  };
};

export default authenticate;
