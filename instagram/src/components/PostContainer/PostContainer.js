import React from 'react';
import CommentSection from "./../../components/CommentSection/CommentSection";

const PostContainer = props => {

    return (

        <div className="post-container"> 
          <div className="name-container">  
            <img
          src={props.post.thumbnailUrl}
          alt="thumbnail"
          className="thumbnnail-img"
        />
        <span className="poster-name">{props.post.username}</span>
      </div>
      <img
        src={props.post.imageUrl}
        alt=""
        className="img"
      />

            <CommentSection 
        postId={props.post.imageUrl}
        comments={props.post.comments}
 />
            
        </div>

    );

  }

export default PostContainer;