import React, { Component } from 'react';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',
        loggedIn: false,

    }
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.loginSubmit}>
            Username: <input 
            type="text"
            onChange={this.props.handleChanges}
            name="username"
            />
            Password: <input
            type="text"
            onChange={this.props.handleChanges}
            name="password"/>
            <button onClick={this.props.loginSubmit}>Login</button>
        </form>
      </div>
    );
  }
}


export default Login;