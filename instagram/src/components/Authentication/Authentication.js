import React from "react";

const Authentication = App => {
  return class AuthenticationClass extends React.Component {
    render() {
      return <App />;
    }
  };
};

export default Authentication;
