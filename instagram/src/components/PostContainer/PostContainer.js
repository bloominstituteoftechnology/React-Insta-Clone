import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => props.dummyData.map((dummyData,index) => {
    return(
      <div className="post" key={Math.random()}>
        <div className="post-top-container">
          <img src={dummyData.thumbnailUrl} className="thumbnail"></img>
          <p className="username">
            {dummyData.username}
          </p>
        </div>
        <img src={dummyData.imageUrl} className="main-img"></img>
        <p>
          likes: {dummyData.likes}
        </p>
        <CommentSection comments={dummyData.comments} index = {index} />
          <input type="text" className="form-control comment-form" placeholder="Add a comment..."></input>
      </div>
    )
  })

export default PostContainer;
