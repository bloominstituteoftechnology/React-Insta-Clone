import React from 'react';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      // Sets the state's username and password to an empty string.
      username: '',
      password: ''
    };
  }
  // Assigns an anonmyous function to the variable login.
  login = event => {
    // Stops the page refresh event from happening.
    event.preventDefault();
    // Sets username into the web browser's storage.
    // ? event.target.username.value
    localStorage.setItem('Password', event.target.username.value);
  };

  render() {
    return (
      <div className="Login">
        <form className="loginForm">
          <input type="text" className="username" />
          <input type="text" className="password" />
        </form>
      </div>
    );
  }
}
export default Login;
