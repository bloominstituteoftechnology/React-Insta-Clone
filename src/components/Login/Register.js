import React, { Component } from "react";
import "./Login.scss";
import sprite from "./sprite.png";
import { connect } from "react-redux";
import { newUser } from "../../actions";

class Register extends Component {
  state = {
    email: "",
    fullName: "",
    username: "",
    password: "",
    data: []
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAddingUser = async (e, email, fullName, username, password) => {
    e.preventDefault();
    if (!email || !username || !password || !fullName) {
      alert("All Fields Required");
    } else {
      await this.props.addUser(email, fullName, username, password);
      await this.setState({ data: this.props.user });
      //   window.location.href = "/login";
    }

    if (this.props.user) {
      alert("You Signed Up! You can now login ");
    }
  };
  render() {
    const { email, username, fullName, password } = this.state;
    if (this.props.isRegistered) {
      window.location.href = "/login";
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
          <h2 className="sign-up-text">
            Sign up to see photos and videos from your friends.
          </h2>
          <div className="signup-form">
            <form
              onSubmit={e => {
                e.preventDefault();
                return this.props.addUser(email, fullName, username, password);
              }}
            >
              <input
                onChange={this.handleChange}
                name="email"
                placeholder="Mobile Number or Email"
                type="email"
                required
              />
              <input
                onChange={this.handleChange}
                name="fullName"
                placeholder="Full Name"
                type="text"
                required
              />
              <input
                onChange={this.handleChange}
                name="username"
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
                onClick={e => {
                  e.preventDefault();
                  return this.props.addUser(
                    email,
                    fullName,
                    username,
                    password
                  );
                }}
                className="signup-btn"
              >
                Sign Up
              </button>
              <p className="terms">
                By signing up, you agree to our{" "}
                <a href="https://help.instagram.com/581066165581870">Terms</a>,{" "}
                <a href="https://help.instagram.com/519522125107875">
                  Data Policy
                </a>{" "}
                and <a href="/legal/cookies/">Cookies Policy</a>.
              </p>
              <p className="terms">
                Already Have An Account?{" "}
                <a style={{ color: "blue" }} href="/login">
                  Login
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
  isRegistered: state.Insta.isRegistered
});

const mapActionsToProps = {
  addUser: newUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Register);
