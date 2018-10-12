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
      localStorage.getItem("username")
        ? this.setState({ loggedIn: true })
        : this.setState({ loggedIn: false });
    }

    render() {
      return this.state.loggedIn ? <App /> : <Login />;
    }
  };

export default Authenticate;
