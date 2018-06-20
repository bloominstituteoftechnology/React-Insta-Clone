import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

// const Post = props => {
class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        likes: props.post.likes
      };
    }  

    incrementLike = () => {
      let likes = this.state.likes + 1;
      this.setState({ likes });
    };

    render() {
      return (
    //   Post header

      <div className="post-border" key={this.props.id}>
        <div className="post-container">
          <div className="post-header">
            <div className="thumbnail-container">
              <img className="thumbnail-img" src={this.props.post.thumbnailUrl} />
            </div>
            <div className="user-name">{this.props.post.username}</div>
          </div>
          
          <div className="post-content">
            <img className="post-img" src={this.props.post.imageUrl} />
            <div className="post-likes">{this.props.post.likes} likes</div>
          </div>

          <div className="post-comments">
            <CommentSection 
            postId={this.props.post.imageUrl}
            comments={this.props.post.comments}
            />
          </div>
        </div>
      </div> 
    );
  };
};

Post.propTypes = {
    id: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
}

export default Post;