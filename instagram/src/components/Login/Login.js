import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state={

    }
  }

  render() {
    return (
      <div className="loginDiv">
        <form className="loginForm">
          <input className="usernameInput" placeholder="Username"/>
          <input className="passwordInput" placeholder="Password"/>
          <button className="loginButton">Submit</button>
        </form>

      </div>
    )
  }
}
export default Login;