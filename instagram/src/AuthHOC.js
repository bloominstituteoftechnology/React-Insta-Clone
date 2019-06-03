import React, { Component } from "react";

const AuthHOC = Form => App =>
  class extends Component {
    state = {
      loggedIn: false
    };

    authHandler = () => {
      this.setState({
        loggedIn: !this.state.loggedIn
      });
    };
    render() {
      if (this.state.loggedIn) {
        return (
          <div>
            <Form auth={this.authHandler} loggedIn={this.state.loggedIn} />
            <App />
          </div>
        );
      } else {
        return (
          <div>
            <Form auth={this.authHandler} loggedIn={this.state.loggedIn} />
            <span>Please Log In</span>
          </div>
        );
      }
    }
  };

export default AuthHOC;
