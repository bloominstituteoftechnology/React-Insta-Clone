import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

let CommentEnterField = props => {
  return (
    <div className="row AddComment">
      <input
        type="text"
        id={props.id}
        className="commentSubmitField"
        placeholder="Add a comment..."
        onKeyUp={props.method}
      />
      <FontAwesomeIcon className="icon moreIcon" icon={faEllipsisH} />
    </div>
  );
};

export default CommentEnterField;
