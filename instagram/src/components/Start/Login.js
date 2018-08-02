import React from "react";
import logo from "../../assets/instagramlogin.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLoginSubmit(this.state.username, this.state.password);
  };
  
  render() {
    let fieldsValid = this.state.username && this.state.password;
    return (
      <div className="content">
        <div className="box login">
          <form className="login__box" onSubmit={this.handleSubmit}>
            <img src={logo} alt="logo" className="start--logo" />
            <div className="input-box">
              <input
                name="username"
                type="text"
                className="input input--username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                name="password"
                className="input input--password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
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
