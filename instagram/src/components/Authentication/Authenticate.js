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

    
    
    componentDidMount() {
      console.log(2)
      if(!localStorage.getItem("username")) {
        this.setState({loggedin: false})
      } else {
          this.setState({loggedin: true})
      }
    }



    render() {
      console.log(1)

     
      const isLoggedIn = this.state.loggedin;
      
      return (
        <div>
         {isLoggedIn ? <App /> : <LogIn />}
        </div>
      );
    }
  };

export default Authenticate;
