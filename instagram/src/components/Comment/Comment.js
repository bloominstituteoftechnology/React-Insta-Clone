import React from "react";
import "./Comment.css";
import moment from "moment";
import PropTypes from "prop-types";
class Comment extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="comment">
        <p>
          <span className="comment-username">
            {this.props.comment.username}
          </span>{" "}
          {this.props.comment.text}
        </p>
        <p />
      </div>
    );
  }
}

Comment.propType = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};
export default Comment;
