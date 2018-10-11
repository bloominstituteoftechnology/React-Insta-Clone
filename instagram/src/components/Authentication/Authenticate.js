import React from "react";

//HOC
const Authenticate = (App, Login) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: localStorage.getItem("username")
      };
    }

    componentDidMount = () => {
      var username = localStorage.getItem("username");
      if (username) {
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        });
      }
    };

    render() {
      if (this.state.loggedIn) {
        return <App />;
      } else {
        return <Login />;
      }
    }
  };

export default Authenticate;