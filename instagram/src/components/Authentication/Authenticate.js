import React from 'react';
import Login from '../Login/Login';

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
      if ((!localStorage.getItem('user')) && (!localStorage.getItem('password'))) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;        
    return (<Login />);
  }
}

export default Authenticate;