import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePic: props.post.thumbnailUrl,
      username: props.post.username,
      postImg: props.post.imageUrl,
      likes: props.post.likes,
      timestamp: props.post.timestamp
    }
  }

  likeHandler=(event)=> {
    this.setState(prevState => ({likes: prevState.likes+1}))
  }

  render() {
    return (
        <div>
          <p className="post-header"> <img className="profile-pic" src={this.state.profilePic} alt='Profile' /> {this.state.username}</p>
          <img src={this.state.postImg} alt='Posted' />
          <div className="post-icons-container"><img onClick={this.likeHandler} className="post-icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/682470-200.png"/> <img className="post-icon" src="https://image.freepik.com/free-icon/chat-bubble-ios-7-interface-symbol_318-38832.jpg" /> </div>
          <p>{this.state.likes} likes</p>
          <p>Posted {this.state.timestamp}</p>
        </div>
      );}
}

Post.propTypes = {
  post: PropTypes.shape({
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string
  })
};
export default Post;
