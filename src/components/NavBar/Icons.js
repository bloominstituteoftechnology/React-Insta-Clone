import React from "react";

const Icons = props => {
  return (
    <div className="icons">
      <i className="far fa-compass" />
      <i className="far fa-heart" />
      <i
        className="far fa-user"
        onClick={() => {
          window.localStorage.clear();
          window.location.href = "/";
        }}
      />
    </div>
  );
};

export default Icons;
