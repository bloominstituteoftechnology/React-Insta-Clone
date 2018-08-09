import React from "react";

const Login = props => {
  return (
    <div className="Login">
      <h1>Please Login</h1>
      <form onSubmit={this.handSubmit}>
        <input
          type="username"
          placeholder="Enter Username"
          value={props.username}
          onChange={props.handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={props.password}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;

// value={this.state.username}
// value={this.state.password}
