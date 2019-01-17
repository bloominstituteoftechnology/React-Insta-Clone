/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

const styledHeaderWrapper = css`
  justify-self: flex-start;
  margin: 12px 0px 12px 5px;
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(2, 0.5fr);
`;

const styledHeaderThumbnail = css`
  align-self: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const styledHeaderElement = css`
  align-self: center;
`;

const PostHeader = props => {
  return (
    <div css={styledHeaderWrapper}>
      <img src={props.data.thumbnailUrl} alt="[]" css={styledHeaderThumbnail} />
      <a href="#" css={styledHeaderElement}>
        {props.data.username}
      </a>
    </div>
  );
};

export default PostHeader;
