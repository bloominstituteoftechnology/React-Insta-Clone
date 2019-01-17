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
        <h1>{props.fullName}</h1>
        <small>{props.username}</small>
      </div>
    </div>
  );
};

export default LoggedInUser;
