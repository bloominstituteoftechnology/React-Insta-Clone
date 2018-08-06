import React, {Component} from 'react';

import Login from './../Login/Login';

const Authenticate = Posts =>
  class extends Component {
    constructor(){
      super();
      this.state = {
        isLoggedIn: false,
        username: '',
        password: '',
      }
    }

    componentDidMount(){
      const local = localStorage.getItem('login');
      if(local && local !== 'false'){
        this.setState({
          isLoggedIn: localStorage.getItem('login'),
          username: localStorage.getItem('username'),
        });
      }
    }

    handleLogin = event =>{
      event.preventDefault();
      localStorage.setItem('login', true);
      localStorage.setItem('username', this.state.username);
      this.setState({ isLoggedIn: true, });
    }

    handleUserChange = event =>{
      this.setState({[event.target.name]: event.target.value})
    }

    handleLogout = () => {
      localStorage.setItem('login', false);
      this.setState({username: '', isLoggedIn: false});
    }

    render(){
      return(
          this.state.isLoggedIn ?
            <Posts handleLogout={this.handleLogout} loggedIn={this.state.isLoggedIn} username={this.state.username} /> :
            <Login handleUserChange={this.handleUserChange} handleLogin={this.handleLogin} />
      );
    }
  }

  export default Authenticate;
