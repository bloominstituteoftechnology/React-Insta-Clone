import React from "react";
import LogIn from "../Login/Login";

// This component should be able to take in a component as an argument,
// and it will return a class component.

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    render() {
      if (this.state.loggedIn) return <App />;
      return <LogIn />;
    }
  };

//   Be sure to export out this component.
export default Authenticate;
