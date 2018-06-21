import React from 'react'

class Login extends React.Component {

  render() {
    return (
      <div className="login-box">
      <div className="container">
        <h3>Welcome To InstaClone</h3>
        <h4>Please sign in:</h4>
        <input onChange={this.props.setUser} type="text" placeholder="Enter Username" />
        <input onChange={this.props.setPass} type="text" placeholder="Enter Password" />
        <button onClick={this.props.logIn} className="login-button" href="#">Log in</button>
      </div>
      </div>
    )
  }
}

export default Login;
