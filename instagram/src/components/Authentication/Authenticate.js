import React from "react";
import Login from "../Login/Login";

const Authenticate = Component =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username") && localStorage.getItem('password')) {
        this.setState({
          loggedIn: true,
        });
      }
      else {
        this.setState({
          loggedIn: false,
        })
      }
    }

    render() {
      return this.state.loggedIn ? <Component /> : <Login />;
    }
  };

export default Authenticate;
