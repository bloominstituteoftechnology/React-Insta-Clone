import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostContainer";

const PostInfo = props => {
  return (
    <Fragment>
      <div className="action-buttons">
        <FontAwesomeIcon
          icon={["far", "heart"]}
          size="2x"
          className="icon"
          value={props.info.likes}
          onClick={props.handleLike}
        />
        <FontAwesomeIcon
          className="icon"
          icon={["far", "comment"]}
          flip="horizontal"
          size="2x"
          // onClick={this.focus}
        />
      </div>
      <div className="likes">
        <p className="bold">{props.info.likes} likes</p>
      </div>
    </Fragment>
  );
};

export default PostInfo;
