import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
  return (
    <div  className="PostContainer"
          id={props.post.username + ': ' + props.post.timestamp}>

      <div className="post-author">
        <img  src={props.post.thumbnailUrl}
              alt={props.post.username}
              className="thumbnail"/>
        {props.post.username}
      </div>

      <img  src={props.post.imageUrl} alt="image"
            className="post-image"/>

      <div className="actions">
        <div  id="like"
              className="sprite-glyph">
        </div>
        <div  id="comment"
              className="sprite-glyph">
        </div>
      </div>

      <div className="likes">{props.post.likes + ' likes'}</div>

    </div>
  );
}

export default PostContainer;