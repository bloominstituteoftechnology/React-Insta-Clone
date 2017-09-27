import React from "react";

export const GetComments = props => {
  return (
    <ul>
      {props.comments.map(comment => {
        return (
          <div className="Comments-List">
            <p className="Comment-username-text">
              <strong className="Comment-username">
                {comment.username}
              </strong>{" "}
              {comment.text}
            </p>
          </div>
        );
      })}
    </ul>
  );
};
