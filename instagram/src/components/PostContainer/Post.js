import React from 'react';
import PostHeader from './PostHeader';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './Posts.css';

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      };
    }
    addLike = () => {
      let likes = this.state.likes + 1;
      this.setState({likes});
    };

  render() {
    return (
        <div className="post-border">
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
          />
          <div className="post-image-wrapper">
            <img className="post-image" src={this.props.post.imageUrl} alt="user-pic"
            />
          </div>
          <div className="post-icons" key="and-likes" onClick={this.props.addLike}
          addLike={this.state.addLike} likes={this.state.likes}>
          <i className="far fa-heart"/>
          <i class="far fa-comment"/>
          <span className="likes-text"><br />{this.props.post.likes} likes</span> 
          </div>
          <CommentSection comments={this.props.post.comments} postId={this.props.post.imageUrl} 
          />
          </div>  
    );
    }
};

export default Post;

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };