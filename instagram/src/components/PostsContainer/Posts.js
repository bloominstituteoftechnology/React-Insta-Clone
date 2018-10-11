import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import CommentSection from '../CommentSection/CommentSectionContainer';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post
    }
  }

  incrementLike = (event) => {
    event.preventDefault();

    const post = JSON.parse(JSON.stringify(this.state.post))
    post.likes = post.likes + 1;

    this.setState({ post });
  }

  render() {
    const { username, thumbnailUrl, imageUrl, likes, comments, timestamp } = this.state.post;
    return (
      <div className="Post">

        <header className="Post-header">
          <img src={thumbnailUrl} alt="user thumbnail" />
          <h2>{username}</h2>
        </header>

        <section className="Post-body">
          <img src={imageUrl} alt="post img" />
          <div className="Post-action">
            <div className="like-btn" onClick={this.incrementLike}>
              <i className="far fa-heart fa-2x icon"></i>
            </div>
            {/* <i class="fas fa-heart fa-2x liked-btn icon show"></i> */}
            <i className="far fa-comment fa-2x icon comment-btn"></i>
          </div>

          <p className="likes">{likes} likes</p>
        </section>

        <CommentSection comments={comments} timestamp={timestamp} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;