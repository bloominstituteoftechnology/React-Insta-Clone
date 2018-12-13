import React from "react";
import "./Nav.css";
import ExploreIcon from "./ExploreIcon";
import LikedPostsIcon from "./LikedPostsIcon";
import ProfileIcon from "./ProfileIcon";

const Nav = props => {
  return (
    <div className="nav">
      <ExploreIcon />
      <LikedPostsIcon />
      <ProfileIcon />
    </div>
  );
};

export default Nav;
