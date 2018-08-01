import React, {Component} from 'react';

import Login from './../Login/Login';

const Authenticate = Posts =>
  class extends Component {
    constructor(){
      super();
      this.state = {
        isLoggedIn: false,
        username: '',
      }
    }

    componentDidMount(){
      //check if local storage has login
    }

    handleLogin = event =>{
      event.preventDefault();
      this.setState({ isLoggedIn: true, });
    }

    handleUserChange = event =>{
      this.setState({username: event.target.value})
    }

    handleLogout = () => {
      this.setState({isLoggedIn: false});
    }

    render(){
      return(
          this.state.isLoggedIn ?
            <Posts loggedIn={this.state.isLoggedIn} username={this.state.username} /> :
            <Login handleUserChange={this.handleUserChange} handleLogin={this.handleLogin} />
      );
    }
  }

  export default Authenticate;
