import React from "react";
import LoggedInUser from "./LoggedInUser";

const SideBarContainer = props => {
  return (
    <div className="side-bar">
      <LoggedInUser />
      <div className="stories">
        <div className="stories-header">
          <small>Stories</small>
          <h1>Watch All</h1>
        </div>
        <div className="stories-content">
          <LoggedInUser />
          <LoggedInUser />
          <LoggedInUser />
          <LoggedInUser />
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestions-header">
          <small>Suggestions For You</small>
          <h1>See All</h1>
        </div>
        <div className="suggestions-content">
          <LoggedInUser />
          <LoggedInUser />
          <LoggedInUser />
          <LoggedInUser />
        </div>{" "}
      </div>
    </div>
  );
};

export default SideBarContainer;
