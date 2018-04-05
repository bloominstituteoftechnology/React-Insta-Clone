import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'likeHandler' : props.like,
      'liked' : false,
      'url': 'img/heart.png'
    }
  }

  likeButtonClick = () => {
    let url, liked = this.state.liked;
    this.state.likeHandler(!liked);
    url = liked ? 'img/heart.png' : 'img/heart-like.png'
    this.setState({'liked' : !liked, 'url' : url});
  }

  render() {
    return (
      <div className="post-container">
        <div className="header-img">
          <img className="icon" src={this.props.post.thumbnailUrl} alt="User icon" />
          <h5 className="header">{this.props.post.username}</h5>
        </div>
        <div>
          <img className="main-img" src={this.props.post.imageUrl} alt="Main post content" />
        </div>
        <div className="img-button-container">
          <img onClick={this.likeButtonClick} className="img-button" src={this.state.url} alt="Like button"/>
          <img className="img-button" src="img/answer.png" alt="Comment button" />
        </div>
        <div className="likes"><p>{this.props.post.likes} Likes</p></div>
        <CommentSection
          change={this.props.change}
          submit={this.props.submit}
          comments={this.props.post.comments}
          value={this.props.value} />
      </div>
    );
  }
}

export default PostContainer;
