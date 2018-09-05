import React from "react";

const authenticate = App =>
  class App extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }
    componentDidMount() {
      localStorage.username;
    }
    render() {
      return <App />;
    }
  };

export default authenticate;
