import React from "react";
import PostHeader from "./PostHeader";
import CommentContainer from '../CommentSection/CommentContainer';

const Post = props => {
  return (
    <div>
     
      <div>
        <img src={props.post.imageUrl} alt="nah" />
      </div>

      <div>
        <PostHeader
          username={props.post.username}
          thumbnailUrl={props.post.thumbnailUrl}
        />
      </div>
      <CommentContainer comments='props.post.comments' />
    </div>
  );
};

export default Post;
