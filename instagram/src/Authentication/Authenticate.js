import React from 'react';

const Authenticate = (App, Login) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        username: '',
        password: ''
      };
    }

    componentDidMount() {
      localStorage.setItem('username', 'hardlyreal');
      localStorage.setItem('password', 'password');
    }

    loginInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    validateUser = e => {
      e.preventDefault();
      const { username, password } = this.state;
      if (
        username === localStorage.getItem('username') &&
        password === localStorage.getItem('password')
      ) {
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
