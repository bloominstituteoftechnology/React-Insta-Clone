import React from "react";

const LoginPage = props => {
  return (
    <div className="loginPage">
      <div className="login" onClick={props.signIn}>
        Instaclone
      </div>
    </div>
  );
};

export default LoginPage;
