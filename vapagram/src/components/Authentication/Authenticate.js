// ? Could we go over why we are importing React, { Component } instead
// of just React here?
import React, { Component } from 'react';
import Login from '../Login/Login';

// Class component that sets the state for loggedIn to false
const Authenticate = App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    // ? Slightly unsure what componentDidMount does but the login within
    // states that if the localstorage item "InstagramUsername is not null
    // then it sets the loggedIn state to true.
    componentDidMount() {
      console.log('Local storage: ', localStorage.getItem('InstagramUsername'));
      if (localStorage.getItem('InstagramUsername') !== null) {
        this.setState({ loggedIn: true });
      }
    }
    // This render if statement asks if this.state.loggedIn is true or not
    // if it is true, we'll return to the App component. If it isn't true
    // then we'll be redirected to the Login component.
    render() {
      let output = this.state.loggedIn ? <App /> : <Login />;
      return output;
    }
  };

export default Authenticate;
