import React, { Fragment } from "react";
import "./PostContainer";

const PostImage = props => {
  return (
    <Fragment>
      <img src={props.src} alt="insta post" className="post-img" />
    </Fragment>
  );
};

export default PostImage;
