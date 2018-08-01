import React from "react";
import "./LogIn.css";
import logo from "../../assets/instagramlogin.png";

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = e => {
    console.log(e.target.type)
    if (e.target.type === 'text') {
      this.setState({ username: e.target.value });
    } if (e.target.type === 'password') {
      this.setState({ password: e.target.value})
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    this.props.handleLogIn(this.state.username);
  };

  render() {
    let fieldsValid = this.state.username && this.state.password;

    return (
      <div className="wrapper">
        <div className="content">
          <div className="login">
            <form className="login__box" onSubmit={this.handleSubmit}>
              <img src={logo} alt="logo" className="login--logo" />
              <div className="input-box">
                <input
                  type="text"
                  className="input input--username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  className="input input--password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <button disabled={!fieldsValid} className="login--btn" type="submit">
                Log in
              </button>
            </form>
          </div>
          <div className="signUp">
            <div className="signUp-box">
              <p> Don't have an account? </p> <a ref="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
