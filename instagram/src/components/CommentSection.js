import React from "react";
import LikeSection from './LikeSection';

const CommentSection = props => {
  return (
    <div>
      <LikeSection />
      <div>likes</div>
      <div>
        {props.comments.map((each, i) => {
          return (
            <div key={i}>
              <strong>{each.username}</strong> {each.text}
            </div>
          );
        })}
      </div>
      <div>
        <form onSubmit={(event) => props.submitNewComment(event, props.timestamp)} className="commentBar">
          <input
            onChange={props.updateCommentField}
            type="text"
            placeholder="Add comment... "
            name='commentField'
            value={props.commentField}
          />
        </form>
      </div>
    </div>
  );
};

export default CommentSection;

