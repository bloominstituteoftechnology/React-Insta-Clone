import React from "react";
import "./commentSection.css";
import PropTypes from 'prop-types';
export default class postContainer extends React.Component {
  commentHandler = () => {
    if (this.props.comments) {
      return this.props.comments.map(comment => {
        return (
          <div className="Comment" key={comment.id}>
            <span className="Username" key={comment.username}>{comment.username} </span>
            <span > {comment.text}</span>
          </div>
        );
      });
    }
  };
  render() {
    return <div className="CommentSection">{this.commentHandler()}</div>;
  }
}
postContainer.propTypes = {
  comments: PropTypes.array.isRequired
}
