import React from "react";

const CommentSection = props => props.dummyData.map(dummyData => {
    return(
      <div>
        <p className="comment-section" key={Math.random()}>
          he
        </p>
      </div>
    )
  })

export default CommentSection;
