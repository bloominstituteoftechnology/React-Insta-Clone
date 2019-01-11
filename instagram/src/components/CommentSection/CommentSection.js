import React, { Component } from 'react';
 import Comment from '../CommentSection/Comment.js';
 import './CommentSection.css';
 import like from './img/like.png';
 import comments from './img/comments.png';
 import PropTypes from "prop-types";
 import styled from 'styled-components';

 const  Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
 `

class CommentSection extends Component {
 constructor (props) {
   super();
   this.state={
    likes: props.likes,
    comments:props.comments,
    newComment:" ",
    likeStatus: false,
    timestamp:props.timestamp 
   }
 }

 addNewComment = (e) =>{
   e.preventDefault();
   let enteredValue = [...this.state.comments]
   enteredValue.push({username:[localStorage.getItem('user')], 
   text: this.state.comment
  })
   this.setState({comments: enteredValue, comment:''
  })
 }

 handleTextChange = (e) => {
  if (this.key !== " " && e.key === 'Enter') { 
    this.addNewComment(e)
  }
  else{
    this.setState({
    [e.target.name]: e.target.value
})}}

 
   
   clickedImg = (e) =>{
   
    e.preventDefault();
    if (this.state.likeStatus === false){
      console.log('likes are here')
      this.setState({
        likeStatus: true,
        likes: this.state.likes + 1,
      }
      )
      console.log(this.state.likeStatus)
    } else {
      this.setState(
        {
        likeStatus: false,
        likes: this.state.likes - 1,
        
      })
    }
    
    console.log(this.state.likeStatus)
  }

 render() {
    return (
    <Container>
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
        <form>
         <input name="comment" type ="text" placeholder="Add a Comment..." onChange={this.handleTextChange} onKeyDown={this.handleTextChange} value={this.state.comment} 
         />
        </form>
       
      </div>
    </Container>
)}}
CommentSection.propTypes = {
   comments: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
      likes: PropTypes.number
  }))
}
 export default CommentSection;
