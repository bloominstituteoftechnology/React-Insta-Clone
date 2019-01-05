// import React from "react";
import React, { Component } from 'react';
import PropTypes from "prop-types";
import Comment from './Comment'
import './CommentSection.css'
import heart from './ig-heart-icon-unliked.png'
import redHeart from './ig-heart-icon-liked.jpeg'

class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments,
      data: props.data,
      comment: "",
      likes: props.data.likes,
      likeStatus: false,
    }
  }

  changeComment = event => {
    // console.log('event.key', event.keyCode)
    if (event.key === 'Enter' && this.state.comment !== '') {
      this.addNewComment(event)
    } else {
      // console.log('Test')
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
  
  addNewComment = (event) => {
    event.preventDefault()
    let newArray = [...this.state.comments]
    newArray.push({
      username: "kalicha",
      text: this.state.comment,
    })
    this.setState({
      comments: newArray,
      comment: ''
    })
  }

  clickedImg = () =>{
    if (this.state.likeStatus === false){
      console.log("Inside if")
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

  render(){
    // console.log('test comments', this.state.comments)
    console.log(this.state.postLiked)
    return (
      <div className='comment-section'> 
        <img src={this.state.data.imageUrl} alt='post image' />
        <div className="heart-icon">
          <img src={this.state.likeStatus ? redHeart: heart} alt="IG heart" onClick={this.clickedImg}/>
        </div>
        <p className='likes'>{this.state.likes} likes</p>
        {this.state.comments.map((comment, index) => (
          <Comment username={comment.username}
            text={comment.text}
            key={index}
          />
        ))}
        <form>
          <input
            name="comment"
            type="text" 
            placeholder="Add a comment..." 
            className='input'   
            onChange={this.changeComment}
            onKeyDown={this.changeComment}
            value={this.state.comment}
          />
        </form>
      </div>
    )
  }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;
