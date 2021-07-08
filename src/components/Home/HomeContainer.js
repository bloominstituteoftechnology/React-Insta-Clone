import React from "react";
import PostContainer from "./PostContainer";
import SideBarContainer from "./SideBarContainer";
import "./Home.scss";

const HomeContainer = props => {
  return (
    <div className="home-container">
      <div className="flex-box">
        <div className="right-bar">
          <SideBarContainer />
        </div>
        <div className="left-bar">
          <PostContainer />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
