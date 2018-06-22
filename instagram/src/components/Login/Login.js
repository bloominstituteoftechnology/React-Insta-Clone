import React from "react";

const Login = props => {
  return (
    <div>
      <form>
        <input name="Username"  onChange={props.onChangeUserName}/>
        <input name="Password"  onChange={}/>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
