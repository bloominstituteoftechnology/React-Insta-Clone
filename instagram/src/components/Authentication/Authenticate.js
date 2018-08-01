import React from "react";
import Login from "../Login/Login";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false
      };
    }

    handleLoginChange = event => {
      this.setState({
        username: event.target.value
      });
    };
    handleLogin = () => {
      localStorage.setItem("username", this.state.username);
    };

    componentDidMount() {
      let lsUsername = localStorage.getItem("username");
      if (lsUsername === "Frank") {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn === true) {
        return <App />;
      } else {
        return (
          <Login
            loginHandler={this.handleLogin}
            loginChangeHandler={this.handleLoginChange}
          />
        );
      }
    }
  };

export default Authenticate;
