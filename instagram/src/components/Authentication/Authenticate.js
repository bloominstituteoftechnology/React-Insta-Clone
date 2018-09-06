import React from 'react';
import Login from '../Login/Login';

let usernameChecker = localStorage.setItem("username", "Username");
let passwordChecker = localStorage.setItem("password", "Paassword123");

const Authenticate = App => 
  class extends React.Component {
    // Inside of Authenticate we need to add a constructor to hold our state data.
    constructor(props) {
      super(props);
      this.state = {
        // On state we need a user loggedIn boolean flag.
        loggedIn: false,        
      }
    }   
     

     componentDidMount() {          
      if (!localStorage.getItem('user')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn === true) {
        return <App />;        
      } else {
        return (
          <Login 
            // props here
            loginHandler={this.handleLogin}
            loginChangeHandler={this.handleLoginChange}
            loginPasswordHandler={this.handlePasswordChange}
          />
        );
      }
    }
  };

export default Authenticate;