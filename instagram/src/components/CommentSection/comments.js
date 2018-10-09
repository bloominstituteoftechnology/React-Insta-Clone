import React from "react";

const Comments = props => {
  console.log(props);
  return (
    <div>
      {props.comments.map(data => {
        return (
          <div className="comment-container">
            <h3>{data.username}</h3>
            <p>{data.text}</p>
            <form>
              <input type="text" placeholder="add new comment" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
