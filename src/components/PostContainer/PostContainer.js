import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import '../CommentSection/CommentSection.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      commentShow: false,
      likes: this.props.postings.likes,
      comments: this.props.postings.comments,
      newComment: {
        text: "",
      },
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
    let like = this.state.likes;
    this.state.toggle ? this.setState({likes: --like}) : this.setState({likes: ++like});
  };
  
  showComment = () => {
    this.setState({ commentShow: true })
  }
  
  handleComment = (event) => {
    this.setState({ 
      newComment: {
        username: "guest",
        text: event.target.value,
      }
    });
    console.log(this.state.newComment);
  }
  
  addComment = (event) => {
    event.preventDefault();
    //const comment = this.state.newComment;
    
    if (!!this.state.newComment.text) {
      this.setState({
        comments: [...this.state.comments, this.state.newComment],
        newComment: {
          text: "",
        },
      });
    }
  }
  
  render() {
    const heart = this.state.toggle ? "https://pbs.twimg.com/profile_images/734545539233112064/fmlvHHBk_400x400.jpg"
     : "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png";
     //console.log(this.state.comments);
     const toShow = this.state.commentShow ? {display: "inline"} : {display: "none"};
    return (
      <div className="mainContainer">
        <div className="userName">
          <img src ={this.props.postings.thumbnailUrl} alt ="icon" height='60'  width='60' className='rounded' />
          <div className='userID'>{this.props.postings.username}</div>
        </div>
        <img src ={this.props.postings.imageUrl} onDoubleClick={this.handleClick} alt ="mainPost" height='600' className='mainImage'/>
        <div className='commentHeart'>
          <img src={heart} onClick={this.handleClick} alt ="Women's Day!" height="35" width="35"/>
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/124237-200.png" onClick={this.showComment} onSubmit={this.handleComment}
          alt ="comment" height="45" width="45"/>
        </div>

        <div className='likes'><b>{this.state.likes}</b> likes</div>
        <div>
          {this.state.comments.map((comment, i) => {
            return (
              <CommentSection key={i} eachComment={comment} />
            )
          })}
          <br/>
          <form onSubmit={this.addComment} className="commentSection" style={toShow}>
            <input type="text" onChange={this.handleComment} placeholder="Add a new comment"
              value={this.state.newComment.text} />
          </form>
        </div>
      </div>
    )
  }
};

export default PostContainer;