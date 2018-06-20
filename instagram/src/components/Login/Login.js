import React from 'react';
import '../instagram.css'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  handleLogin = event => {
    console.log('something happened')
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <form>
        Username: <input type="text" placeholder="username" name="username"
        value={this.state.username} onChange={this.handleChange}/><br/>
        Password: <input type="text" name="password"
         value={this.state.password} placeholder="password"
         onChange={this.handleChange}/><br/>
        <input type="submit" value="Log In" onClick={this.handleLogin}/>
      </form>
    );
  }
}

export default Login;
