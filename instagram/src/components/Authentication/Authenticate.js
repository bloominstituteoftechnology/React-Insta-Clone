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

    componentDidMount() {
      if (
        localStorage.getItem("Username") &&
        localStorage.getItem("Password")
      ) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;
