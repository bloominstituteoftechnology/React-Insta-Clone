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
      likes: props.likes, 
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
 likeBtn = l =>{
   l.preventDefault; 
   const likes = this.state.likes +1; 
   this.setState({likes}); 
 }
  render() {
    return (
      <div>
        <div className="img-icons">
        <div className="img-icon-left">
            <i onClick={this.likeBtn}className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="fas fa-paper-plane" />
        </div>
        <div className="img-icon-right">
            <i className="far fa-bookmark" />
        </div>
        </div>
        <div className="comment user likes">{this.state.likes} likes</div>
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
