import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { loginUser } from "../store/action/authAction";
import styled from "styled-components";
import { FormGroup, Input, Button } from "reactstrap";

import mainPhone from "../assets/mainphone.png";
import phone1 from "../assets/phone1.jpg";
import phone2 from "../assets/phone2.jpg";
import phone3 from "../assets/phone3.jpg";
import phone4 from "../assets/phone4.jpg";
import phone5 from "../assets/phone5.jpg";
import getapp1 from "../assets/getapp01.png";
import getapp2 from "../assets/getapp02.png";
import sprite from "../assets/sprite.png";

const LoginStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;

  .parent {
    position: relative;
    top: 0;
    left: 0;
  }
  @media (max-width: 860px) {
    .parent {
      display: none;
    }
  }
  .image1 {
    position: relative;
    top: 0;
    left: 0;
  }

  .slide {
    display: none;
  }
  .active {
    position: absolute;
    top: 100px;
    left: 151px;
    width: 240px;
    z-index: 10;
    display: block;
  }

  .get_app {
    width: 140px;
  }
  .have_account {
    border: 1px solid #e6e6e6;
    font-size: 15px;
    padding: 20px 0 5px 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3b3b3b;
    background: white;
    min-width: 390px;
    max-width: 390px;
  }
  .get_app_parent {
    margin: 0 auto;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .get_app {
      margin-right: 10px;
    }
  }
  .get_app_subtitle {
    color: #262626;
    font-size: 14px;
    text-align: center;

    margin: 20px auto;
  }
  .title_sprite {
    background-repeat: no-repeat;
    background-position: -98px -150px;
    height: 51px;
    width: 175px;
    display: block;
    overflow: hidden;
    text-indent: 110%;
    white-space: nowrap;
    margin: 52px auto 22px;
  }

  .red-text {
    color: #f16974;
    padding: 5px 0;
    font-size: 13px;
  }
  input {
    margin: -8px 0px;
    background: #fafafa;
    font-size: 12px;
    border: 1px solid #efefef;
  }

  .signup_btn {
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    margin: 20px 0;
    box-sizing: border-box;
    line-height: 1.2;
    background-color: #3797f0;
  }

  .parent_or {
    .or02 {
      text-align: center;

      color: #999;
      max-width: 290px;
      margin: 30px auto;
      font-size: 13px;
      font-weight: 600;
      line-height: 15px;
      text-transform: uppercase;
      position: relative;
      z-index: 1;
      overflow: hidden;
      &:before,
      &:after {
        position: absolute;
        top: 26%;
        overflow: hidden;
        width: 50%;
        height: 1px;
        content: "\a0";
        background-color: #efefef;
      }
      &:before {
        margin-left: -50%;
        text-align: right;
      }
      .color {
        background: white;
        padding: 0 20px;
      }
    }
  }

  .loginContainer {
    background: white;
    border: 1px solid #e6e6e6;
    min-width: 390px;
    max-width: 390px;
  }

  .login_facebook {
    text-align: center;
    p {
      margin: -11px 0;
    }
    i {
      font-size: 19px;
      color: #385185;
    }
    a {
      font-size: 13px;
      color: #21517c;
      display: block;
      padding: 10px 0 20px 0;
    }
    span {
      font-size: 14px;
      font-weight: 500;
      color: #385285;
      margin-left: 4px;
    }
  }
`;
const images = [
  { src: phone1 },
  { src: phone2 },
  { src: phone3 },
  { src: phone4 },
  { src: phone5 }
];

class Login extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      activeIndex: 0
    };
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.interval = window.setInterval(() => {
        this.next();
      }, 4500);
    }
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentWillUnmount = () => {
    this._isMounted = false;
    clearInterval(this.interval);
  };

  next = e => {
    const nextIndex =
      this.state.activeIndex === images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { activeIndex } = this.state;
    const slides = images.map((images, index) => {
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <img src={images.src} alt="..." className={computedClass} key={index} />
      );
    });
    const { errors } = this.state;
    return (
      <LoginStyle>
        <div className="parent">
          <img
            src={mainPhone}
            alt="main iphone instagram login"
            className="image1"
          />
          {slides}
        </div>
        <div>
          <div className="loginContainer">
            <div
              className="title_sprite"
              style={{
                backgroundImage: `url(${sprite})`
              }}
            />

            <form
              noValidate
              onSubmit={this.onSubmit}
              style={{ maxWidth: "290px", margin: "0 auto" }}
            >
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                  placeholder="Phone number or email"
                />
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </FormGroup>
              <FormGroup>
                <Input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  placeholder="Password"
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </FormGroup>
              <div>
                <Button
                  disabled={!this.state.email || !this.state.password}
                  style={
                    !this.state.email || !this.state.password
                      ? { background: "#C8E1FB", border: "1px solid #C8E1FB" }
                      : null
                  }
                  className="signup_btn"
                  color="primary"
                  size="lg"
                  block
                  type="submit"
                >
                  Login
                </Button>
              </div>
              <div className="parent_or">
                <div className="or or02">
                  <span className="color">OR</span>
                </div>
              </div>
              <div className="login_facebook">
                <p>
                  <i className="fab fa-facebook" />
                  <span>Log in with Facebook</span>
                </p>
                <br />
                <a href="https://www.instagram.com/accounts/password/reset/">
                  Forgot password?
                </a>
              </div>
            </form>
          </div>

          <div className="have_account">
            <p>
              Don't have an account?
              <Link className="login_linke" style={{ marginLeft: 4 }} to="/">
                Sign up
              </Link>
            </p>
          </div>
          <p className="get_app_subtitle">Get the app</p>
          <div className="get_app_parent">
            <img className="get_app" src={getapp1} alt="get app" />
            <img className="get_app" src={getapp2} alt="get app" />
          </div>
        </div>
      </LoginStyle>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
