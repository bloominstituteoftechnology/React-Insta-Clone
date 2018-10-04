import React from 'react';

const PostContainerImg = props => {
  return (
    <div className="post-photo">
      <img src={props.image} alt="postphoto" />
    </div>
  );
}

export default PostContainerImg;
