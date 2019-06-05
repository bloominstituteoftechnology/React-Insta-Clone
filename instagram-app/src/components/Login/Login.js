import React from 'react';

class LoginForm extends React.Component {
  state = {
    password: '',
    username: ''
  };

  onHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };
    localStorage.setItem('user', JSON.stringify(credentials));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type='text' placeholder='username' value={this.state.username} name='username' onChange={this.onHandleChange} />
          <input type='text' placeholder='password' value={this.state.password} name='password' onChange={this.onHandleChange} />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
