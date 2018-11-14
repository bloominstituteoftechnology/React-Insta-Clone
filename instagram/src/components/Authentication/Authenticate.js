import React from "react";
import Login from "../Login/Login";

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
      return <Login login={this.login} />;
    }
  };

export default Authenticate;
