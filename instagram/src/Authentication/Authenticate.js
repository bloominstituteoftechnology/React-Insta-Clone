import React, { Component } from "react";
import Login from "../components/Login/Login";

const Authenticate = WC => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("currentSN")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <WC />;
      } else {
        return <Login />;
      }
    }
  };
};

export default Authenticate;
