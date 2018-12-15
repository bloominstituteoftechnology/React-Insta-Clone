import React from "react";
import CommentSection from "./CommentSection";

function PostContainer(props) {
    return (
      <section className="postContainer">
        <div className="postUser">
          <img src={props.dummyData.thumbnailUrl} alt="userImg"/>
          <h3>{props.dummyData.username}</h3>
        </div>
        <div className="image">
          <h3>Image</h3>
        </div>
        <CommentSection key={props.username} dummyData={props.dummyData} />
      </section>
    );
}

export default PostContainer;

