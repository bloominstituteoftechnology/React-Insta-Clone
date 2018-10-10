import React from "react";

const Authenticate = PassedComponent => SecondComponent => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      if (!!localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      if (this.state.loggedIn) {
        return <PassedComponent />;
      } else return <SecondComponent />;
    }
  };
};

export default Authenticate;
