import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    }
  }
  render() {
    return (
      <div>
        <header>
          <img src={this.props.post.thumbnailUrl} alt="user pic" />
          {this.props.post.username}
        </header>

        <img src={this.props.post.imageUrl} alt="main pic" />
        <Likes
          likes={this.state.likes}
        />
        

        <CommentSection 
          comments={this.props.post.comments} 
        />
      </div>
    ) 
  }
}
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
}


export default Post;