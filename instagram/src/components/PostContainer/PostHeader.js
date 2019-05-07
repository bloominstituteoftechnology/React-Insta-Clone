import React from 'react';

const STYLE_BASE = "posts-section_";

const PostHeader = props => {
  return (
    <div className={`${STYLE_BASE}postHeaderContainer`}>
      <div className={`${STYLE_BASE}postThumbnailContainer`}>
        <img
          alt="post header"
          className={`${STYLE_BASE}postThumbnail`}
          src={props.thumbnailUrl}
        />
      </div>
      <div className={`${STYLE_BASE}username`} >{props.username}</div>
    </div>
  );
};

export default PostHeader;