import React from "react";

const Authenticate = WrappedComponent => {
  return class extends React.Component {
    render() {
      return <WrappedComponent />;
    }
  };
};

export default Authenticate;
