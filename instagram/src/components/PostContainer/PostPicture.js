/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const styledPostPicture = css`
  justify-self: center;
  height: 600px;
  width: 550px;
`;

const PostPicture = props => {
  return <img src={props.data.imageUrl} alt="[]" css={styledPostPicture} />;
};

export default PostPicture;
