import React from "react";
import LoginPage from "../Login/LoginPage";

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        loginInfo: {
          username: "",
          password: ""
        },
        users: [{ username: "default", password: "default" }]
      };
    }

    nameHandler = event => {
      // event.preventDefault();
      this.setState({
        loginInfo: {
          username: event.target.value,
          password: this.state.loginInfo.password
        }
      });
    };

    passHandler = event => {
      // event.preventDefault();
      this.setState({
        loginInfo: {
          username: this.state.loginInfo.username,
          password: event.target.value
        }
      });
    };

    checkCreds = () => {
      console.log("submit");
      this.state.users.forEach(user => {
        if (
          this.state.loginInfo.username === user.username &&
          this.state.loginInfo.password === user.password
        )
          this.setState({ loggedIn: true });
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
            onSubmit={this.checkCreds}
          />
        );
      } else return <WrappedComponent />;
    }
  };
};

export default Authenticate;
