import React from 'react';

class Login extends React.Component {
  state = {
    username: '',
  };

  changeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  login = () => {
    localStorage.setItem('username', this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            className="username-field"
            type="text"
            value={this.state.username}
            onChange={this.changeHandler}
            placeholder="username"
            required
          />
          <input
            className="password-field"
            type="password"
            placeholder="password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
