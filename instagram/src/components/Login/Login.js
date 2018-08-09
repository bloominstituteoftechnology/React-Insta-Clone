import React from "react";
// import "./App.css";

const Login = props => {
  return (
    <div className="login">
      <form onSubmit={props.handleSubmit}>
        <input
          name="username"
          value={props.username}
          placeholder="Enter username here..."
          type="text"
          onChange={props.handleChange}
        />
        <input
          name="password"
          value={props.password}
          placeholder="Enter password here..."
          type="password"
          onChange={props.handleChange}
        />
        <button>Summmbit</button>
      </form>
    </div>
  );
};

export default Login;
