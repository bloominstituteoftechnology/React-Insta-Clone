import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";

const PostContainer = props => {
  const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = props.post;
  
  return(
    <div className="post">
      <div className="post-head">
	  <img className="post-thumbnail" src={thumbnailUrl} alt={username}/>
          <div className="post-username">{username}</div>
      </div>
      <div className="post-image">
	   <img src={imageUrl} alt="meaningful"/>
      </div>
      <div className="likes">
	<div>{likes} likes</div>
	<br/>
	{comments.map((comment, index) => <CommentSection key={index} comment={comment} />)}
        <div className="timestamp">{timestamp}</div>
      </div>
    </div>
  );
};

export default PostContainer;
