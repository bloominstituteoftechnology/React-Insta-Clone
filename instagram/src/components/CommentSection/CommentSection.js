import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import './Comment.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
    console.log(this.state)
  }

  //handles the commment input // works
  commentInputHandler = event => {
    this.setState({ comment: event.target.value });
    console.log(this.state)
  };

  // handles the comment submit
   // pushing new todo onto sliced todos array
  submitCommentHandler = event => {
      event.preventDefault();
      this.setState(prevState => {
          return {
              comments: prevState.comments.concat({ text: prevState.comment, username: "keeganb" }),
              comment: ''
          }
      })
    }

  render() {
    return (
      <div>
        {this.state.comments.map((com, index) => <Comment key={index} comment={com} />)}
        <CommentInput
        comment={this.state.comment}
        commentInput={this.commentInputHandler}
        submitComment={this.submitCommentHandler}
         />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
