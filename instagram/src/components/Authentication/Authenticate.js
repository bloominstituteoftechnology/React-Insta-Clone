import React from "react";
import Login from "../Login/Login";
import { Redirect } from "react-router-dom";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ isLoggedIn: true });
      }
    }

    login = () => {
      this.setState({ isLoggedIn: true });
    };

    render() {
      if (this.state.isLoggedIn) return <App />;
      return <Login log={this.login} />;
    }
  };

export default Authenticate;
