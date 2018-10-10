import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import "./PostContainer.css";
import heart from "../icons/heart.png"
import chat from "../icons/chat.png"

class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      post: props.post,
      likes: 0,
    }
  }

  increaseLikes = () => {
    this.setState((prevState) => {
      return {
      likes: prevState.likes + 1
      };
    });
  };

  render() {
  return (
    <div className="Post">
      <h2> {this.state.post.username} </h2>
      <img src={this.state.post.imageUrl} alt=""/>
      <div className="icon-bar">
        <img id="likeButton" 
        src={heart} 
        onClick={this.increaseLikes}
        alt=""/>
        <img src={chat} alt=""/>
      </div>
      <p>{this.state.likes} likes</p>
      <CommentSection comments={this.state.post.comments} />
    </div>
  )
}
}

export default PostContainer;