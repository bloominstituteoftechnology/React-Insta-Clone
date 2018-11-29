import React, { Component } from 'react';
import Login from '../Login/Login.js'
 const Authenticate = App =>
  class extends Component {
    constructor(props){
      super(props);
      this.localStorageKey = 'manage-login';
      this.state = {
        loggedIn: false,
        username: null,
      };
    }
         login = (username, password) => {

          
         let createLogin;
      let logins = JSON.parse(
        window.localStorage.getItem(this.localStorageKey)
      );
      if (logins) {
        let newLog = logins.find(combo => combo.username === username);
        if (newLog) {
          if (password === newLog.password) {
            this.setState({ loggedIn: true, username: newLog.username });
            return;
          } else {
            alert("Aw snap :( Wrong password. Try again.");
            return;
          }
        } else {
          createLogin = logins.slice();
          createLogin.push({ username, password });
        }
      } else {
          createLogin = [{ username, password }];
      }
      window.localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(createLogin)
      );
      alert("Welcome to Insta-Clone!");
      this.setState({ loggedIn: true, username });
    };
    render() {
      if (this.state.loggedIn){
        return <App username={this.state.username} />;
      } else {
        return <Login newLog={this.newLog} />;
      }
  }
}
   export default Authenticate;
