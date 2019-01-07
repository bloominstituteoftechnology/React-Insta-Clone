import React, { Component } from 'react';
 import Comment from '../CommentSection/Comment.js';
 import './CommentSection.css';
 import like from './img/like.png';
 import comments from './img/comments.png';
 import PropTypes from "prop-types";

class CommentSection extends Component {
 constructor (props) {
   super();
   this.state={
    likes:props.likes,
    comments:props.comments,
    newComment:''
   }
 }
 handleTextChange = (e) => {
  if (this.state.comment !== '' && e.key === 'Enter') {
    this.addNewComment(e)
  }
  else{
    this.setState({
    [e.target.comments]: e.target.value
})}}

 addNewComment = (e) =>{
  e.preventDefault();
     let enteredValue = [...this.setState.comments]
     enteredValue.push({username:'My User Name', text: this.state.newComment})
     this.setState({comments: enteredValue})
   }
   
   
 render() {
    return (
    <div className="commentSection">
      <div className="likeComments">
        <a href="#"><img src={like} alt="like" /></a>
        <a href="#"><img src={comments} alt="comments" /></a>
      </div>
      <div className="likes">
        <p>{this.props.likes} likes</p>
      </div>

    {this.props.comments.map(comment => {
      return <Comment 
      username={comment.username} 
      text={comment.text}
      />
  })}
  <div className="addComment">
        <form>
         <input type ="text" placeholder="Add a Comment" onChange={this.handleTextChange} onKeyDown={this.handleTextChange} value={this.state.newComment} 
         />
        </form>
       
      </div>
    </div>
)}}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
  }))
}
 export default CommentSection;
