import React from 'react';

class Login extends React.Component {
  onButtonClick = () => {
    if (
      this.props.username === this.props.user &&
      this.props.password === this.props.pass
    ) {
      const username = JSON.stringify(this.props.username);
      const password = JSON.stringify(this.props.pass);
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
  };

  render() {
    return (
      <div className="Login">
        <input
          onChange={this.props.onChange}
          required
          type="text"
          name="username"
          value={this.props.username}
        />
        <input
          onChange={this.props.onChange}
          required
          type="text"
          name="password"
          value={this.props.password}
        />
        <button onClick={this.onButtonClick}>Login</button>
      </div>
    );
  }
}

export default Login;
