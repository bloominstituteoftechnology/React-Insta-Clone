import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => props.dummyData.map(dummyData => {
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
      </div>
    )
  })

export default PostContainer;
