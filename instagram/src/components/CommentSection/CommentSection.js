import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  console.log(props.data[0].comments[0].text);
  return (
    <div>
      {props.data.map(item =>
        item.comments.map(comment => (
          <div className="comment">
            <strong>{comment.username}</strong> {comment.text}
          </div>
        ))
      )}

      {/* <div className="comment">
        <strong>biancasaurus</strong> Looks delicious!
      </div>
      <div className="comment">
        <strong>martinseludo</strong> Can't wait to try it!
      </div> */}
    </div>
  );
};

export default CommentSection;
