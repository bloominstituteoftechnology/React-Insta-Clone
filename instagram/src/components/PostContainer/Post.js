import React from 'react';
import CommentSectionContainer from '../CommentSection/CommentContainer';
import PostHeader from './PostHeader';
import './Post.css';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }

    render() {
        return (
        <div className="post-border">
          <PostHeader
            username={this.props.post.username}
            thumbnailUrl={this.props.post.thumbnailUrl}
        />
      <div className="post-img-wrapper">
        <img
          alt="post thumbnail"
          className="post-img"
          src={this.props.post.imageUrl}
        />
      </div>
        <LikeSection 
            incrementLike={this.incrementLike}
            likes={this.state.likes}
        />
        <CommentSectionContainer comments={this.props.post.comments} />
    </div>
    );
    }
    
}

Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string
    })
  };

export default Post;