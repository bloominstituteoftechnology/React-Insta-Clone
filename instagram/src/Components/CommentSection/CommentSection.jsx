import React from "react";

const CommentSection = props => {
    console.log(props);
  return (
    <div>
      {props.comments.map((post, index) => (
        <div key={index} className="commentSection">
          <strong className="username">{post.username}</strong>
          <div className="commentText">
            <p>{post.text}</p></div>
        </div>
      ))}
      
      <form>
        <input type="text" placeholder="comment" />
        <button>Post</button>
      </form>
    </div>
  );
}

export default CommentSection;
