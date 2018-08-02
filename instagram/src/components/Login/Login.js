import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: true,
      loginValue: "",
    }
  }

  inputHandler = event => {
    this.setState({
      loginValue: event.target.value,
    })
  }

  render(){
    {console.log('hi')}
    return (
      <div className="login">
        <h1>LOGIN PAGE</h1>
        <form>
          <input
            value={this.state.loginValue}
            placeholder="enter name"
            onchange={this.inputHandler}>{this.value}</input>
        </form>

      </div>
    )
  }
}

export default Login;
