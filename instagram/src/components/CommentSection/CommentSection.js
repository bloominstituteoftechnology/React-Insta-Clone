import React from "react";
import PropTypes from "prop-types";
import Comment from "../Comment/Comment";
import "./CommentSection.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
  }
  addNewComment = () => {};
  render() {
    return <Comment className="post__comment" comments={this.props.comments} />;
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentSection;
