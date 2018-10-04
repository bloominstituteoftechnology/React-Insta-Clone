import React from 'react';

const PostContent = props => {
  return (
    <div className="post-content">
      <img src={props.image} alt="postphoto" />
    </div>
  );
}

export default PostContent;
