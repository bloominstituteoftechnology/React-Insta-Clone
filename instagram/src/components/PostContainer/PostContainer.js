import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div  className='PostContainer'
          id={props.post.username + ': ' + props.post.timestamp}>
    ghfh
    </div>
  );
}

export default PostContainer;