import React from "react";
import LoginPage from "../LoginPage/LoginPage";

const Authenticate = ReactComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        LoggedIn: false
      };
    }
    componentDidMount() {}
    render() {
      return this.state.LoggedIn ? <ReactComponent /> : <LoginPage />;
    }
  };
};
export default Authenticate;
