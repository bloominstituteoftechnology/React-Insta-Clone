import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <form>
          <input placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
