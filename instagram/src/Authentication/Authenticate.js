import React from 'react';
import App from '../App.js';
import Login from '../components/Login/Login'

const Authenticate = Component => {
  class Page extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
        username: "",
        password: ""
      }
    }

    login = (event) => {
      event.preventDefault();
      const user = localStorage.getItem('username');
      const pass = localStorage.getItem('password');
      const userIn = this.state.username;
      const passIn = this.state.password;

      if(user === userIn && pass === passIn) {
        this.setState(prev => {
          return {loggedIn: !prev.loggedIn}
        })
    }

    signUp = (event) => {
      event.preventDefault();
      localStorage.setItem('username', this.state.username);
      localStorage.setItem('password', this.state.password);
    }

    handleUser = (event) => {
      event.persist()
      this.setState(() => {
        return {username: event.target.value}
      });
    }

    handlePassword = (event) => {
      event.persist()
      this.setState(() => {
        return {password: event.target.value}
      });
    }

    render() {
      if(this.state.loggedIn) {
        return <App />
      }
      return <Login login={this.login}
                    handleUser={this.handleUser}
                    handlePass={this.handlePassword}
                    signup={this.signUp}
                />
    }
  };

  return Page;
}

export default Authenticate;
