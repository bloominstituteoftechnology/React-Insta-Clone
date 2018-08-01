import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={
      loginHandler: props.loginHandler,
      loginChangeHandler: props.loginChangeHandler
    }
  }

  render() {
    return (
      <div className="loginDiv">
        <form className="loginForm">
          <input className="usernameInput" placeholder="Username" onChange={this.state.loginChangeHandler}/>
          <input className="passwordInput" placeholder="Password"/>
          <button className="loginButton" onClick={this.state.loginHandler}>Submit</button>
        </form>

      </div>
    )
  }
}
export default Login;