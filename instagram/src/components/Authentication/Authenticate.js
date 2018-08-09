import React from "react";
import Login from "../Login/Login";

const Authenticate = AuthedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({
          loggedIn: false
        });
      } else {
        this.setState({
          loggedIn: true
        });
      }
    }

    render() {
      if (this.state.loggedIn) return <AuthedComponent {...this.props} />;
      return <Login />;
    }
  };

export default Authenticate;
