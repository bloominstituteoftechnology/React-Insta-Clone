import React from "react";
// we need to return the login component or the app pending the condiiton
// we have in state depeding on if we have it in localStorage

const Authenticate = App =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    render() {
      // if user is logged in... render app
      // else render a login comonent.
      return (
        <App />
      )
    }
  };

  export default Authenticate;