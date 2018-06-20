import React from 'react'

class Login extends React.Component {

  render() {
    return (
      <div className="login-box">
        <input onChange={this.props.setUser} type="text" placeholder="Enter Username" />
        <input onChange={this.props.setPass} type="text" placeholder="Enter Password" />
        <button onClick={this.props.logIn} className="login-button" href="#">Log in</button>
      </div>
    )
  }
}

export default Login;
