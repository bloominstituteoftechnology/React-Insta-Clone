import React from "react";

const LoggedInUser = props => {
  return (
    <div className="loggedin-user">
      <img
        src="https://picsum.photos/200
"
        alt="Hamza Elkhodiri"
      />
      <div className="username-container">
        <h1>Test User</h1>
        <small>Profile Name</small>
      </div>
    </div>
  );
};

export default LoggedInUser;
