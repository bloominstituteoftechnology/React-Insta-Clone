import React from 'react';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  setUsername = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="Login">
        <form className="login">
          <input type="text" className="username" />
          <input type="text" className="password" />
        </form>
      </div>
    );
  }
}
export default Login;
