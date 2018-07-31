import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Comment from "./Comment";

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      added: "", 
    };
  }
  addComment = i =>{
      i.preventDefault(); 
      const comments = this.state.comments.slice(); 
      comments.push({
      text:this.state.added, 
      username: "bob", 
      })
      this.setState({comments, added: ""})
  }
 changeComment = e => this.setState({
     added: e.target.value
 })
  render() {
    return (
      <div>
        <CommentSection 
        comments={this.state.comments} />
        <Comment
        handleSubmitBtn={this.addComment}
        value={this.state.added}
        handleChangeComment={this.changeComment} />
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentInput;
