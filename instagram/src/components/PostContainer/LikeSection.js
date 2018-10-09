import React from "react";

const LikeSection = props => {
  return [
    <div className="likeSection" key="likeImgContainer" onClick={props.upLike}>
      {" "}
    </div>,

    <div className="likeSection" key="likeContainer">
      {props.likes}
    </div>
  ];
};

export default LikeSection;
