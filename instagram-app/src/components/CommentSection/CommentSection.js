import React from "react";

const CommentSection = props => {
  return (
    <div>
      {props.comments.username}
      {props.comments.text}
    </div>
  )
}

// CommentSection.prototype = {
//   comment: Proptypes.shape({
//     username: Proptypes.string,
//     text: Proptypes.string
//   })
// }

export default CommentSection;