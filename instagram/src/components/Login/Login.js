import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitHandler = event => {
    const user = this.state.username;
    const password = this.state.password;
    localStorage.setItem('username', user);
    localStorage.setItem('password', password)
    window.location.reload();
  };

  render() {
    return (
      <form>
        <input type="text" name="username" placeholder="user name" onChange={this.changeHandler} 
        value={this.state.username}/>
        <input type="text" name="password" placeholder="password" onChange={this.changeHandler}
          value={this.state.password}/>
        <button onClick={this.submitHandler}>
        Log In
        </button>
      </form>
    )
  }
}

export default Login;