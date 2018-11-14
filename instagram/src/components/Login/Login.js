import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="login-form">
        <form>
          <input name="username" onChange={e => this.handleChange(e)} type="text" placeholder="Username"/>
          <input name="password" onChange={e => this.handleChange(e)} type="text" placeholder="Password"/>
          <button type="button" onClick={() => this.props.handleLogin(this.state.username, this.state.password)}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;