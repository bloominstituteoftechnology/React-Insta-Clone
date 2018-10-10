import React from "react";
import Login from "../Login/Login"

const Authenticate = App =>
  class extends React.Component {
    constructor() {
        super();
        this.state = {
          loggedIn: false,
          username: "",
        };
      }

      triggerOnLogin = username => {
        this.setState(
          {
            loggedIn: true,
            username: username,
          },
          () => {
            localStorage.setItem("loggedIn", this.state.loggedIn);
            localStorage.setItem("username", this.state.username);
            
          }
        )
      }

      componentDidMount() {
        localStorage.getItem("loggedIn") !== null ? this.setState({loggedIn: true}) : this.setState({loggedIn: false});
     }

      render() {
        return this.state.loggedIn === false ? (
          <Login  triggerOnLogin={this.triggerOnLogin}/>
        ) : (
          <App />
        );
      }
  };

export default Authenticate;