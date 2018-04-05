import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'thumbnailUrl' : props.data.thumbnailUrl,
      'username' : props.data.username,
      'imageUrl' : props.data.imageUrl,
      'likes' : props.data.likes,
      'comments' : props.data.comments,
      'change' : props.change,
      'submit' : props.submit,
      'value' : props.value,
      'likeHandler' : props.like,
      'liked' : false
    }
  }

  likeButtonClick = () => {
    let liked = this.state.liked;
    this.state.likeHandler(!liked);
    this.setState({'liked' : !liked})
  }

  render() {
    return (
      <div className="post-container">
        <div className="header-img">
          <img className="icon" src={this.state.thumbnailUrl} alt="User icon" />
          <h5 className="header">{this.state.username}</h5>
        </div>
        <div>
          <img className="main-img" src={this.state.imageUrl} alt="Main post content" />
        </div>
        <div className="img-button-container">
          <img onClick={this.likeButtonClick} className="img-button" src="img/heart.png" alt="Like button"/>
          <img className="img-button" src="img/answer.png" alt="Comment button" />
        </div>
        <div className="likes"><p>{this.state.likes} Likes</p></div>
        <CommentSection
          change={this.state.change}
          submit={this.state.submit}
          comments={this.state.comments}
          value={this.state.value} />
      </div>
    );
  }
}

export default PostContainer;
