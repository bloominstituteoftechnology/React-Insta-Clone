import React, { Component } from "react";
import sprite from "./sprite.png";
import { connect } from "react-redux";
import { login } from "../../actions";

class Login extends Component {
  state = {
    username: "",
    password: "",
    data: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogginIn = async (e, email, password) => {
    e.preventDefault();
    await this.props.onLogin(email, password);
    await this.setState({ data: this.props.user });
    if (this.state.data.token) {
      window.localStorage.setItem("token", this.state.data.token);
      window.localStorage.setItem("username", this.state.data.user.username);
      window.localStorage.setItem("fullName", this.state.data.user.fullName);
      window.location.href = "/";
    }
  };
  render() {
    return (
      <div className="login-page">
        <div className="left-side">
          <img src="phones.png" alt="Hamza Elkhoudiri | Phones" />
        </div>
        <div className="right-side">
          <div
            className="title_sprite"
            style={{ backgroundImage: `url(${sprite})` }}
          />
          <div className="signup-form">
            <form>
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="Username"
                required
              />
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button
                onClick={e =>
                  this.onLogginIn(e, this.state.email, this.state.password)
                }
                className="signup-btn"
              >
                Login
              </button>
              <p className="terms">
                By signing up, you agree to our{" "}
                <a href="https://help.instagram.com/581066165581870">Terms</a>,{" "}
                <a href="https://help.instagram.com/519522125107875">
                  Data Policy
                </a>{" "}
                and <a href="/legal/cookies/">Cookies Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Insta.user
});

const mapActionsToProps = {
  onLogin: login
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
