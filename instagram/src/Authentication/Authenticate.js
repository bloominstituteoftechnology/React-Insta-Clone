import React from "react";
import Login from "./login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.localStorageKey = "instaclone-login-data";
      this.state = {
        authenticated: false,
        username: null
      };
    }

    login = (username, password) => {
        let newLoginInfo;
      let logins = JSON.parse(
        window.localStorage.getItem(this.localStorageKey)
      );
      if (logins) {
        let loginInfo = logins.find(pair => pair.username === username);
        if (loginInfo) {
          if (password === loginInfo.password) {
            this.setState({ authenticated: true, username: loginInfo.user });
            return;
          } else {
            alert("You have entered incorrect log-in information");
          }
        } else {
          newLoginInfo = logins.slice();
          newLoginInfo.push({ username, password });
        }
      } else {
          newLoginInfo = [{ username, password }];
      }
      window.localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(newLoginInfo)
      );
      alert("You have been registered as a new user");
      this.setState({ authenticated: true, username });
    };

    render() {
      let toRender;
      if (this.state.authenticated) {
        toRender = <App username={this.state.username} />;
      } else {
        toRender = <Login loginHandler={this.login} />;
      }
      return toRender;
    }
  };

export default Authenticate;
