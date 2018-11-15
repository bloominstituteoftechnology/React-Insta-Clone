import React from "react";

const Authenticate = App => Login =>
  class TheRealApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("username")) {
        console.log("nope");
        this.setState({ isLoggedIn: false });
      } else {
        this.setState({ isLoggedIn: true });
      }
    }
    render() {
      if (this.state.isLoggedIn) return <App />;
      return <Login />;
    }
  };

export default Authenticate;
