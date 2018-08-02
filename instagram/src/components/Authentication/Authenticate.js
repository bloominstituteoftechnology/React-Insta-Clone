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
      return localStorage.getItem("password") === "password" && 
      localStorage.getItem("username") === "mboegner" ? 
      this.setState({ loggedin: !this.state.loggedin }) : null;
    }



    render() {
      const isLoggedIn = this.state.loggedin;

      return (
        <div>
         {isLoggedIn ? <App /> : <LogIn />}
        </div>
      );
    }
  };

export default Authenticate;
