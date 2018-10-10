import React from "react";

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

    render() {
      return <App />;
    }
  };

//   Be sure to export out this component.
export default Authenticate;
