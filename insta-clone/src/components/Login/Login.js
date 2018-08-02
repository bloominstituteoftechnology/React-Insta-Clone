import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  }

  render() {
    return (
      <div className='login-container'>
        <h1> Welcome to Rinstagram!</h1>
        <div className='login-form'>
          <input name='username' type='text' placeholder='Username' value={this.state.username} onChange={this.inputHandler} />
          <input name='password' type='password' placeholder='Password' value={this.state.password} onChange={this.inputHandler} />
          <button onClick={this.submitHandler} className='submit-btn'>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
