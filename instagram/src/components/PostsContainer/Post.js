import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import CommentSection from '../CommentSection/CommentSectionContainer';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      liked: false
    }
  }

  incrementLike = (event) => {
    event.preventDefault();

    const post = JSON.parse(JSON.stringify(this.state.post))
    if (this.state.liked) {
      post.likes -= 1;
      this.setState({ post, liked: false });
    } else {
      post.likes += 1;
      this.setState({ post, liked: true });
    }
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
            <div className="like-btn btn" onClick={this.incrementLike}>
              {this.state.liked ? <i className="fas fa-heart fa-2x icon liked"></i> : <i className="far fa-heart fa-2x icon"></i>}
            </div>

            <div className="comment-btn btn">
              <i className="far fa-comment fa-2x icon comment-btn"></i>
            </div>

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
