import React from "react";
import PostContainer from "./PostContainer";
import SideBarContainer from "./SideBarContainer";
import "./Home.scss";

const HomeContainer = props => {
  return (
    <div className="home-container">
      <div className="right-bar">
        <SideBarContainer />
      </div>
      <div className="right-bar">
        <PostContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
