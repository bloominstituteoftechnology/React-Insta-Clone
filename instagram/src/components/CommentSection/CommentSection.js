import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import Comment from "../Comment/Comment";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      comment: ""
    };
  }
  onChange = e => {
    console.log(e.target.value);
    this.setState({
      comment: e.target.value
    });
  };
  addNewComment = e => {
    e.preventDefault();
    let newComments = this.state.comments;
    newComments.push({
      username: localStorage.user,
      text: this.state.comment
    });
    console.log(this.state.comments);
    console.log(newComments);
    this.setState({
      comments: newComments,
      comment: ""
    });
  };
  render() {
    return (
      <>
        <Comment className="post__comment" comments={this.state.comments} />
        <span className="post__timestamp">
          <Moment fromNow>{this.props.time}</Moment>
        </span>
        <form
          onSubmit={this.addNewComment}
          className="post__comment__input__div"
        >
          <input
            type="text"
            className="post__comment__input"
            placeholder="Add a comment..."
            onChange={this.onChange}
            value={this.state.comment}
          />
          <i className="fas fa-ellipsis-h dots" />
        </form>
      </>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentSection;
