import React from "react";

const Authenticate = App =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    constructor() {
        super();
        this.state = {
        };
      }
    render() {
      // if user is logged in... render app
      // else render a login component.
      return <App />;
    }
  };

  export default Authenticate;