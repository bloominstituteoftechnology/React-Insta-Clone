import React from "react";

const CommentSection = props => {
  return (
    <div>
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
        <form
          onSubmit={event => props.submitNewComment(event, props.timestamp)}
          className="commentBar"
        >
          <input
            onChange={props.updateCommentField}
            type="text"
            placeholder="Add comment... "
            name="commentField"
            value={props.commentField}
          />
        </form>
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
            <i className="far fa-comments" />
          </div>
      </div>
    </div>
  );
};

export default CommentSection;
