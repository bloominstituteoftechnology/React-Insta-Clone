import React from "react";
import Login from "../Login/Login";

const Authenticate = PassedComponent =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("credentials")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      return this.props.credentials ? <PassedComponent /> : <Login />;
    }
  };

export default Authenticate;


