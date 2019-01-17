import React, { Component } from "react";
import sprite from "./sprite.png";
import { connect } from "react-redux";
import { login } from "../../actions";
import Loading from "../Loading";

class Login extends Component {
  state = {
    username: "",
    password: "",
    data: []
  };

  componentDidMount = () => {};
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogginIn = (e, email, password) => {
    e.preventDefault();
    this.props.onLogin(email, password);
  };
  render() {
    console.log(this.props.isAuthenticated);
    if (this.props.isLoading) {
      return <Loading />;
    }
    if (this.props.isAuthenticated) {
      window.location.href = "/";
    }

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
            <form
              onSubmit={e => {
                e.preventDefault();
                return this.props.onLoggin(
                  this.state.email,
                  this.state.password
                );
              }}
            >
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="Email"
                required
                autoComplete="off"
              />
              <input
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="Password"
                required
                autoComplete="off"
              />
              <button
                onClick={e =>
                  this.onLogginIn(e, this.state.email, this.state.password)
                }
                className="signup-btn"
              >
                Login
              </button>
              {this.props.error ? (
                <small style={{ color: "red" }}>{this.props.error.err}</small>
              ) : null}

              <p className="terms">
                By signing up, you agree to our{" "}
                <a href="https://help.instagram.com/581066165581870">Terms</a>,{" "}
                <a href="https://help.instagram.com/519522125107875">
                  Data Policy
                </a>{" "}
                and{" "}
                <a href="https://help.instagram.com/legal/cookies/">
                  Cookies Policy
                </a>
                .
              </p>
              <p className="terms">
                Don't Have an account?{" "}
                <a style={{ color: "blue" }} href="/">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Insta.user,
  isAuthenticated: state.Insta.isLoggedIn,
  isLoading: state.Insta.isLoading,
  error: state.Insta.error
});

const mapActionsToProps = {
  onLogin: login
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Login);
