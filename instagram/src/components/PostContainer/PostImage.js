import React, { Fragment } from "react";
import "./PostContainer";
import styled from "styled-components";

const PostPic = styled.img`
  max-width: 100%;
  height: auto;
`;

const PostImage = props => {
  return (
    <Fragment>
      <PostPic src={props.src} alt="insta post" />
    </Fragment>
  );
};

export default PostImage;
