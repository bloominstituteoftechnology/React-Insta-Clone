import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      likes: this.props.postings.likes,
    }
    //this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.setState({ toggle: !this.state.toggle });
    let like = this.state.likes;
    this.state.toggle ? this.setState({likes: --like}) : this.setState({likes: ++like});
  };
  
  // increaseLikes = () => {
  //   this.state.toggle ? 
  // };
  
  render() {
    const heart = this.state.toggle ? "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Love_Heart_SVG.svg/645px-Love_Heart_SVG.svg.png"
     : "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-128.png";
    return (
      <div className="mainContainer">
        <div className="userName">
          <img src ={this.props.postings.thumbnailUrl} alt ="icon" height='60'  width='60' className='rounded' />
          <div className='userID'>{this.props.postings.username}</div>
        </div>
        <img src ={this.props.postings.imageUrl} alt ="mainPost" height='600' className='mainImage'/>
        <div className='commentHeart'>
          <img src={heart} onClick={this.handleClick} alt ="Women's Day!" height="35" width="35"/>
          <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/124237-200.png" alt ="comment" height="45" width="45"/>
        </div>

        <div className='likes'><b>{this.state.likes}</b> likes</div>
        <div>
          {this.props.postings.comments.map((comment, i) => {
            return (
              <CommentSection key={i} eachComment={comment} />
            )
          })}
        </div>
      </div>
    )
  }
};

export default PostContainer;