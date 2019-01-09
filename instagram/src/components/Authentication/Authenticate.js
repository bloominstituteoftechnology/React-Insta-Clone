import React from "react";

const Authenticate = ReactComponent => {
  return class extends React.Component {
    render() {
      return <ReactComponent />;
    }
  };
};
export default Authenticate;
