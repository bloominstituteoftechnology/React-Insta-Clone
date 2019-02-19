import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../store/action/authAction";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import { FormGroup, Input, Button, Tooltip } from "reactstrap";

const RegisterStyle = styled.div`
  background: white;

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
  .data_policy {
    /* AEAEAE  bold*/
    color: #9e9e9e;
    font-size: 14px;
    text-align: center;
    margin-bottom: 50px;
    span {
      color: #9c9c9c;
      font-size: 14px;
      font-weight: bold;
    }
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
        top: 51%;
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

  .fab {
    font-size: 18px;
    margin: 0 4px;
  }
`;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
      tooltipOpen: false
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.registerUser(newUser, this.props.history);
  };
  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <RegisterStyle>
        <div className="login_fb">
          <Button
            className="signup_btn"
            color="primary"
            type="submit"
            size="lg"
            block
            style={{ maxWidth: "290px", margin: "0 auto" }}
            id="tooltipfb"
          >
            <i className="fab fa-facebook" /> Log in with Facebook
          </Button>
          <Tooltip
            isOpen={this.state.tooltipOpen}
            placement="top"
            autohide={false}
            target="tooltipfb"
            toggle={this.toggle}
          >
            unavailable please use regular sign up
          </Tooltip>
        </div>
        <div className="parent_or">
          <div className="or or02">
            <span className="color">OR</span>
          </div>
        </div>
        <form
          noValidate
          onSubmit={this.onSubmit}
          style={{ maxWidth: "280px", margin: "0 auto" }}
        >
          <FormGroup>
            <Input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name
              })}
              placeholder="Full Name"
            />
            <span className="red-text">{errors.name}</span>
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email
              })}
              placeholder="Mobile Number or Email"
            />
            <span className="red-text">{errors.email}</span>
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password
              })}
              placeholder="Password"
            />
            <span className="red-text">{errors.password}</span>
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2
              })}
              placeholder="Password2"
            />
            <span className="red-text">{errors.password2}</span>
          </FormGroup>
          <div>
            <Button
              className="signup_btn"
              color="primary"
              type="submit"
              size="lg"
              block
            >
              Sign up
            </Button>
            <p className="data_policy">
              By signing up, you agree to our <br />
              <span> Terms, Data Policy </span> and
              <span>
                Cookies <br /> Policy
              </span>
              .
            </p>
          </div>
        </form>
      </RegisterStyle>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
