import React from "react";

const Login = props => {
  return (
    <>
      <p>Username</p>
      <input type="text" defaultValue="" onChange={props.userChange} />
      <p>Password</p>
      <input type="text" defaultValue="" onChange={props.passwordChange} />
      <div onClick={props.submitHandler}>Submit</div>
    </>
  );
};

export default Login;
