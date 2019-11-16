import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import "./CommentStyles.css";
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  addNewComment = e => {
    e.preventDefault();
    const newComment = { username: "Jacob Layton", text: this.state.comment };
    const comments = this.state.comments.slice();
    comments.push( newComment );
    this.setState({ comments, comment: "" });
  };

  changeComment = e => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      // console.log(this.state.comments),
      <div className="all-comments">
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
          comment={this.state.comment}
          addNewComment={this.addNewComment}
          changeComment={this.changeComment}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
}

export default CommentSection;
