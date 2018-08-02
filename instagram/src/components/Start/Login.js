import React from 'react'
import logo from "../../assets/instagramlogin.png";

class Login extends React.Component {
  
  render() {
    let fieldsValid = this.props.username && this.props.password;
    return (
        <div className="content">
          <div className="box login">
            <form className="login__box" onSubmit={this.props.handleSubmit}>
              <img src={logo} alt="logo" className="start--logo" />
              <div className="input-box">
                <input
                  type="text"
                  className="input input--username"
                  placeholder="Username"
                  value={this.props.username}
                  onChange={this.props.handleChange}
                />
                <input
                  className="input input--password"
                  type="password"
                  placeholder="Password"
                  value={this.props.password}
                  onChange={this.props.handleChange}
                />
              </div>
              <button disabled={!fieldsValid} className="btn" type="submit">
                Log in
              </button>
            </form>
          </div>
          <div className="box secondary">
            <div className="secondary-box">
              <p> Don't have an account? </p> 
              <button onClick={this.props.handleSwitchScreens}>Sign Up</button>
            </div>
          </div>
        </div>
    );
  }
}

export default Login;