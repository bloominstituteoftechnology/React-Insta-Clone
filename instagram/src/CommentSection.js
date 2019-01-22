import React from "react";
import Comment from "./Comment";

function CommentSection(props) {
    return (
      <div className="commentSection">
        <input class="input" type="text" placeholder="Write a comment"/>
          {props.dummyData.comments.map(commenters => {
            return (
              <Comment key={commenters.username} commentData={commenters}/>
            );
          })}
      </div>
    );
}

export default CommentSection;