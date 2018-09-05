import React from "react";
// import LoginPage from "../LoginPage/Login";
// import App from "../../App/App";

const authenticate = App =>
  class App extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }
    // componentDidMount() {
    //   if (localStorage.getItem("username")) {
    //     this.state.loggedIn = true;
    //   } else this.state.loggedIn = false;

    //   console.log(this.state.loggedIn);
    // }
    render() {
      return <App />;
      //condition ? expr1 : expr2
      //return this.state.loggedIn ? <App /> : <LoginPage />;
    }
  };

export default authenticate;
