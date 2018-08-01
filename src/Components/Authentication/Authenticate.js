import React, {Component} from 'react';

import Login from './../Login/Login';

const Authenticate = Posts =>
  class extends Component {
    constructor(){
      super();
      this.state = {
        isLoggedIn: true,
        username: '',
      }
    }

    componentDidMount(){
      //check if local storage has login
    }

    handleLoginIn = username =>{
      this.setState({ username });
    }

    render(){
      return(
          this.state.isLoggedIn ?
            <Posts loggedIn={this.state.isLoggedIn} username={this.state.username} /> :
            <Login handleLogin={this.handleLogin} />
      );
    }
  }

  export default Authenticate;
