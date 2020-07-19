import React from "react";
import Login from "../Login/Login"
// we need to return the login component or the app pending the condiiton
// we have in state depeding on if we have it in localStorage

const Authenticate = App =>
  class extends React.Component {
      constructor(props){
          super(props);
          this.state = {
              isLoggedIn: false
          }
      }
      componentDidMount() {
          // if userKey is true (has truthy value)) set isLoggedin to true
          localStorage.getItem('userKey') ?  
          this.setState( {isLoggedIn: true} ) : 
          this.setState( {isLoggedIn: false} );
      }
      // here we are going check when the component mounts is user
    // set up our state so that we have some conditional logging
    render() {
      // if user is logged in... render app
      // else render a login comonent.
        if (this.state.isLoggedIn) {
            return <App />
        } else {
            return <Login />
        }
    }
  };

  export default Authenticate;