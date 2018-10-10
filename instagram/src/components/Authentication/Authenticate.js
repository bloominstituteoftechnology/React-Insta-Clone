import React from "react";
//HOC magic
const Authenticate = Component =>
  class extends React.Component {
    render() {
      return <Component />;
    }
  };
 export default Authenticate;