import React from 'react';
import PropTypes from 'prop-types';
import './Posts.css';
import CommentSection from '../CommentSection/CommentSectionContainer';
import * as styl from './PostsStyles';

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
      <div>

        <styl.Header>
          <styl.UserThumbnail src={thumbnailUrl} alt="user thumbnail"></styl.UserThumbnail>
          <styl.Username>{username}</styl.Username>
        </styl.Header>

        <section>
          <styl.PostImage src={imageUrl} alt="post img"></styl.PostImage>

          <styl.PostAction>
            <styl.LikeButtonWrapper onClick={this.incrementLike}>
              {this.state.liked ? <i className="fas fa-heart fa-2x icon liked"></i> : <i className="far fa-heart fa-2x icon"></i>}
            </styl.LikeButtonWrapper>

            <div>
              <i className="far fa-comment fa-2x icon comment-btn"></i>
            </div>
          </styl.PostAction>

          <styl.LikeCounter>{likes} likes</styl.LikeCounter>
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
