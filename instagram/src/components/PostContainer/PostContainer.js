import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css'

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      userIMG: props.user.imageUrl,
      likes: props.user.likes,
      comments: props.user.comments
    };
  }

  incrementLikeCounter = e => {
    let likes = this.state.likes + 1;

      this.setState({likes: likes})
  }

  render () {
    return (
      <div className='post'>
        <PostHeader user={this.state.user}/>
        <div className='post-img-wrapper'>
          <img className='post-img' src={this.state.userIMG} alt=''/>
        </div>
        <div className='like-section'>
          <div className='like-section-icons'>
            <i className='far fa-heart' onClick={this.incrementLikeCounter}></i>
            <i className='far fa-comment'></i>
          </div>
          <p>{this.state.likes} likes</p>
        </div>
        <CommentSection comments={this.state.comments} />
      </div>
    );
  };
  };

export default PostContainer;
