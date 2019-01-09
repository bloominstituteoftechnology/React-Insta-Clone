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
    newComment:" ",
    likeStatus: false,
    timestamp:props.timestamp 
   }
 }

 addNewComment = (e) =>{
   e.preventDefault();
   let enteredValue = [...this.state.comments]
   enteredValue.push({username:'My User Name', text: this.state.newComment})
   this.setState({comments: enteredValue})
 }

 handleTextChange = (e) => {
  if (this.key !== " " && e.key === 'Enter') { 
    this.addNewComment(e)
  }
  else{
    this.setState({
    [e.target.comments]: e.target.value
})}}

 
   
   clickedImg = (e) =>{
    e.preventDefault();
    if (this.state.likeStatus === false){
      this.setState({
        likeStatus: true,
        likes: this.state.likes + 1,
      })
    } else {
      this.setState(
        {
        likeStatus: false,
        likes: this.state.likes - 1,
      })
    }
  }

 render() {
    return (
    <div className="commentSection">
      <div className="likeComments">
        <a href="#"><img src={like} onClick={this.clickedImg} alt="like" /></a>
        <a href="#"><img src={comments} alt="comments" /></a>
      </div>
      <div className="likes">
        <p>{this.state.likes} likes</p>
      </div>
      
    {this.state.comments.map((comment, index) => {
      return <Comment 
      username={comment.username} 
      text={comment.text}
      key={index}
      />
      
  })}
  <div className="timestamp"><p>{this.state.timestamp}</p></div>
  <div className="addComment">
        <form onSubmit={this.addNewComment}>
         <input type ="text" placeholder="Add a Comment..." onChange={this.handleTextChange} onKeyDown={this.handleTextChange} value={this.state.value} 
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
