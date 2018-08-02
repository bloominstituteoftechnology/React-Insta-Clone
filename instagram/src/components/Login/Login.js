import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   loggedIn: props.state.loggedIn,
    //   username: props.state.username,
    //   password: props.state.password,
    // }
  }


  render(){
    return (
      <div className="login">Login.js
        <h1>LOGIN PAGE</h1>
        <form
          className="login"
          onSubmit={this.props.toStorage}>
          <input
            value={this.props.username}
            placeholder="name"
            onChange={this.props.user}
            >{this.value}</input>
          <input
            value={this.props.password}
            placeholder="password"
            onChange={this.props.pass}>{this.value}</input>
          <button
            onClick={this.props.toStorage}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
