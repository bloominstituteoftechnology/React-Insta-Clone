import React, { Component } from "react";
import "./Login.css";

const Login = props => {
  return (
    <div className="login">
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          value={this.state.username}
          placeholder="Username"
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="password"
          value={this.state.password}
          placeholder="Password"
          type="password"
          onChange={this.handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
