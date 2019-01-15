import React from "react";
import LoggedInUser from "./LoggedInUser";
import Stories from "./Stories";

const SideBarContainer = props => {
  return (
    <div className="side-bar">
      <LoggedInUser />
      <Stories />
    </div>
  );
};

export default SideBarContainer;
