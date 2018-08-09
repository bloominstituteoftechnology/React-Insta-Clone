import React from "react";
import dummyData from "../dummy-data";

// const Authenticate = App => {

const Authenticate = PassedComponent =>
  class Foo extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    authUser = () => {};

    render() {
      return (
       <PassedComponent />
      );
   
    
  };
}

  



export default Authenticate;
