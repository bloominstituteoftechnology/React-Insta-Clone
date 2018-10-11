import React from "react";
import LogIn from "../Login/Login";

// This component should be able to take in a component as an argument,
// and it will return a class component.

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // On state we need a user loggedIn boolean flag.
        loggedIn: false
      };
    }
    // On componentDidMount we need to check localStorage to see if a user is logged in.
    componentDidMount() {
      if (!localStorage.getItem("user") || !localStorage.getItem("password")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }
    // Inside of the render function we will check if a user is logged in
    // If a user is logged in we will return the <App />, else we will return the <LoginPage>
    render() {
      if (this.state.loggedIn) return <App />;
      return <LogIn />;
    }
  };

//   Be sure to export out this component.
export default Authenticate;
