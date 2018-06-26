import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => props.dummyData.map((dummyData,index) => {
    return(
      <div className="post" key={Math.random()}>
        <div className="post-top-container">
          <img src={dummyData.thumbnailUrl} className="thumbnail" alt="placeholder text"></img>
          <p className="username">
            {dummyData.username}
          </p>
        </div>
        <img src={dummyData.imageUrl} className="main-img" alt="placeholder text"></img>
        <p>
          likes: {dummyData.likes}
        </p>
        <CommentSection comments={dummyData.comments} index = {index} />
      </div>
    )
  })

export default PostContainer;
