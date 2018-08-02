import React from 'react';
import Login from '../Login/Login.js';

const Authenticate = App =>
  class extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount(){
      if (!localStorage.getItem('Username')) {
          this.setState({ loggedIn: false });
        } else {
          this.setState({ loggedIn: true });
        }
    }

    render() {
      if (this.state.loggedIn === true ) {
        console.log("user loggedIn, returning App")
        return (<App />);
      } else if (this.state.loggedIn === false) {
        console.log("user not Logged in, returning Login")
        return (<Login />);
      };
    }
  };

export default Authenticate;
