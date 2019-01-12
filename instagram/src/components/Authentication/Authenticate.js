import React from "react";
import LoginPage from "../Login/LoginPage";

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: "",
        password: "",

        users: [
          { username: "default", password: "default" },
          { username: "tommytutone", password: "jenny" },
          { username: "realwallaceshawn", password: "inconceivable" }
        ]
      };
    }

    changeHandler = event =>
      this.setState({ [event.target.name]: event.target.value });

    checkCreds = event => {
      event.preventDefault();
      console.log("submit");
      this.state.users.forEach(user => {
        if (
          this.state.username === user.username &&
          this.state.password === user.password
        ) {
          localStorage.setItem("loggedIn", "true");
          localStorage.setItem("thisUser", user.username);
          this.setState({ loggedIn: true });
        }
      });
      console.log("got it");
    };

    logout = () => {
      console.log("logout");
      this.setState({
        loggedIn: false,
        username: "",
        password: ""
      });
      localStorage.clear();
      console.log(localStorage);
    };

    componentDidMount() {
      const logTok = JSON.parse(localStorage.getItem("loggedIn"));
      if (logTok) this.setState({ loggedIn: logTok });
    }

    render() {
      if (!this.state.loggedIn) {
        return (
          <LoginPage
            username={this.state.username}
            password={this.state.password}
            changeHandler={this.changeHandler}
            onSubmit={this.checkCreds}
          />
        );
      } else return <WrappedComponent logout={this.logout} />;
    }
  };
};

export default Authenticate;
