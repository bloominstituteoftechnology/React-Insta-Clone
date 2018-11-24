import React from 'react';
import LoginPage from '../Login/Login';
// import { Route, Link, Switch } from "react-router-dom";

const Authenticate = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        passwordInput: '',
        usernameInput: ''
      }
    }

    updateUser = event => {
      event.preventDefault();
      this.setState({
        loggedIn: true
      })
    }

    passwordChange = event => {
      console.log(this.state.passwordInput)
      this.setState({
        passwordInput: event.target.value
      })
    }

    usernameChange = event => {
      console.log(this.state.usernameInput)
      this.setState({
        usernameInput: event.target.value
      })
    }

    render() {
      if (this.state.loggedIn === false) {
        return (
          <div>
            <LoginPage 
            updateUser={this.updateUser}
            passwordChange={this.passwordChange}
            usernameChange={this.usernameChange}
            usernameInput={this.usernameInput}
            passwordInput={this.passwordInput}
            />
          </div>
        )
      }
      else {
        // <Route exact path="/" component={App} />
        return <App />
      }
    }
  };

export default Authenticate