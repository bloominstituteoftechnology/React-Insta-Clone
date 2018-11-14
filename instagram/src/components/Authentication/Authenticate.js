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

    login = () => {
      this.setState({ isLoggedIn: true });
    };

    render() {
      if (this.state.isLoggedIn) return <App />;
      return <Login state={this.state.isLoggedIn} login={this.login} />;
    }
  };

export default Authenticate;
