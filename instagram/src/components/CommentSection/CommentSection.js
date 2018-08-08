
import React from 'react';
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
        {console.log(props.timestamp)}
        <form onSubmit={(event) => props.submitNewComment(event, props.timestamp)}>
          <input onChange={props.updateCommentField}
            type="text"
            name='commentField'
            placeholder='Add a comment'
            value={props.commentField}
          />
        </form>
      </div>
    </div>
  );
};


export default CommentSection;