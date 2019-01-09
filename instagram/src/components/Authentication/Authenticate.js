import React from "react";
import LoginPage from "../Login/LoginPage";

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: true,
        loginInfo: {
          username: "",
          password: ""
        }
      };
    }

    nameHandler = event => {
      event.preventDefault();
      this.setState({
        loginInfo: {
          username: event.target.value,
          password: this.state.loginInfo.password
        }
      });
    };

    passHandler = event => {
      event.preventDefault();
      this.setState({
        loginInfo: {
          username: this.state.loginInfo.username,
          password: event.target.value
        }
      });
    };

    render() {
      if (!this.state.loggedIn) {
        return (
          <LoginPage
            userName={this.state.loginInfo.username}
            password={this.state.loginInfo.password}
            nameInput={this.nameHandler}
            passInput={this.passHandler}
          />
        );
      } else return <WrappedComponent />;
    }
  };
};

export default Authenticate;
