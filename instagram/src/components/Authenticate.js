import React from "react";

const Authenticate = (App, notApp) =>
  class extends React.Component {
    // set up our state so that we have some conditional logging
    render() {
      // if user is logged in... render app
      if ("logged in") {
        return <App />;
      } else {
        return <notApp />;
      }
    }
  };

export default Authenticate;
