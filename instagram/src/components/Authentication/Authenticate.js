import React from "react";
import LogIn from "./Login";


const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedin: false        
      };
    };

    consultDidMount() {
      return localStorage.getItem("username") === "mboegner" &&
        localStorage.getItem("password") === "password"
        ? this.setState({ loggedin: !this.state.loggedin })
        : null;
    }

    render() {
      return (
        <div>
          {this.state.loggedin} ? <App /> : <LogIn />
        </div>
      );
    }
  };

export default Authenticate;
