import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    deleteShowing: false,
  };

  showDelete = () => {
    this.setState({ deleteShowing: true });
  };
  render() {
    return (
      <div className="comment" onMouseEnter={this.showDelete}>
        <h1>{this.props.comment.username}</h1>
        <p>{this.props.comment.text}</p>
        <button onClick={this.props.onClick}>Delete</button>
      </div>
    );
  }
}

{/* CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
}; */}

export default CommentSection;
