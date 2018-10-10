import React from 'react';

const Authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: ''
      };
    }

    componentDidMount() {
      localStorage.setItem('username', 'hardlyreal');
    }

    usernameInput = e => {
      this.setState({ username: e.target.value });
    };

    validateUser = e => {
      e.preventDefault();
      if (this.state.username === localStorage.getItem('username')) {
        this.setState({ loggedIn: true });
      }
    };

    render() {
      return (
        <React.Fragment>
          {this.state.loggedIn ? (
            <App />
          ) : (
            <Login
              usernameInput={this.usernameInput}
              validateUser={this.validateUser}
            />
          )}
        </React.Fragment>
      );
    }
  };

export default Authenticate;
