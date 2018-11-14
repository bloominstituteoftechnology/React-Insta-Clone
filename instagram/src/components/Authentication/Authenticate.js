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
      if (localStorage.getItem("username")) {
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
      console.log("auth");
      // return this.state.loggedIn ? <App /> : <Login login={this.login} />;
      // return <Component />;
      if (this.state.loggedIn) return <Component />;
      return <Login />;
    }
  };

export default Authenticate;
