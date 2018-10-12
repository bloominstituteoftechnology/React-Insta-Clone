import React, { Component } from 'react';
import Login from '../Login/Login.js'
 const Authenticate = App =>
  class extends Component {
    constructor(props){
      super(props);
      this.localStorageKey = 'login-record';
      this.state = {
        loggedIn: false,
        username: null,
      };
    }
         login = (username, password) => {

          
         let newLogin;
      let logins = JSON.parse(
        window.localStorage.getItem(this.localStorageKey)
      );
      if (logins) {
        let login = logins.find(pair => pair.username === username);
        if (login) {
          if (password === login.password) {
            this.setState({ loggedIn: true, username: login.username });
            return;
          } else {
            alert("Something is not quite right with that information");
            return;
          }
        } else {
          newLogin = logins.slice();
          newLogin.push({ username, password });
        }
      } else {
          newLogin = [{ username, password }];
      }
      window.localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(newLogin)
      );
      alert("Thanks for signing up");
      this.setState({ loggedIn: true, username });
    };
    render() {
      if (this.state.loggedIn){
        return <App username={this.state.username} />;
      } else {
        return <Login login={this.login} />;
      }
  }
}
   export default Authenticate;
